const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import OrderSession from "@/models/order_session";
import Shipping_rates from "@/models/shipping_rates"
import User from "@/models/user";
import GuestUser from "@/models/guest_user";
import mongoose from "mongoose";
import axios from "axios";
import CorsMiddleware from "@/utils/cors-config"

const currencies = ["AED", "SAR", "PKR"]
const shippingMethods = ["standard_shipping", "express_shipping", "free_shipping"]
const countries = ["pk", "sa", "ae"]
export default async function handler(req, res) {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'POST') {
            const { user_id, is_guest, shipping_info, order_items } = req.body
            if (!user_id || !shipping_info || !order_items || !order_items.length) return res.status(400).json({ success: false, msg: "All valid shipping information and ordered items are required. Body parameters: shipping_info (object), order_items (array), user_id" })
            else if (!countries.includes(shipping_info.country)) return res.status(400).json({ success: false, msg: "We only ship in the following countries: " + countries })
            else if (!currencies.includes(shipping_info.currency)) return res.status(400).json({ success: false, msg: "Invalid Currency, Available currencies: " + currencies })
            else if (!shippingMethods.includes(shipping_info.delivery_option)) return res.status(400).json({ success: false, msg: "Invalid shipping method, Available method args: " + shippingMethods })
            await ConnectDB()

            // getting exchnge rates
            const { data } = await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?want=${shipping_info.currency}&have=${process.env.BASE_CURRENCY}&amount=${1}`)
            const rate = data.new_amount;

            let finalOrderItems = []
            for (const orderItem of order_items) {
                const dbProduct = await Product.findById(orderItem.product_id)
                if (!dbProduct) return res.status(400).json({ success: false, msg: "Either specified product IDs does not exist or the product IDs were tempered." })
                if (!orderItem.original_id) return res.status(400).json({ success: false, msg: "Each order item must have a `original_id` property with the value of its unique variant id." })
                const filteredArray = dbProduct.variants.filter(variant => variant._id.toString() === orderItem.original_id.toString())
                if (!filteredArray || !filteredArray.length) return res.status(400).json({ success: false, msg: "Either specified product IDs does not exist or the product IDs were tempered." })

                const filteredProduct = filteredArray[0]
                const finalProduct = {
                    product_id: dbProduct._id,
                    name: dbProduct.name,
                    price: dbProduct.price,
                    image: filteredProduct.images[0],
                    variant: orderItem?.color || '',
                    uf_points: orderItem?.uf_points || 0,
                    size: orderItem.size,
                    quantity: orderItem.quantity,
                    weight: dbProduct.shipping_details.weight
                }
                finalOrderItems.push(finalProduct)
            }

            const shippingRates = await Shipping_rates.findById("652a79afd889b69c655d903b")

            let totalPrice = 0;
            for (const item of finalOrderItems) {
                const itemPrice = item.price * item.quantity
                totalPrice += itemPrice
            }

            const isEligibleForFreeShipping = () => {
                const { free_shipping } = shippingRates;
                if (shipping_info.country === "ae" && totalPrice >= free_shipping.uae_order_rate) return true;
                else if (shipping_info.country === "sa" && totalPrice >= free_shipping.ksa_order_rate) return true;
                else if (shipping_info.country === "pk" && totalPrice >= free_shipping.pk_order_rate) return true;
                else return false
            }

            const getTotalShippingFee = () => {
                if (shipping_info.delivery_option === "free_shipping") return 0
                const shippingData = shippingRates[shipping_info.delivery_option];
                const totalWeight = finalOrderItems.reduce((accValue, item) => { return accValue + (item.weight * item.quantity) }, 0);
                let countryShipRate = 1;
                let additionalKgRate = 1;
                if (shipping_info.country === "ae") {
                    countryShipRate = shippingData.uae_rate;
                    additionalKgRate = shippingData.additional_kg_charge.uae;
                }
                else if (shipping_info.country === "sa") {
                    countryShipRate = shippingData.ksa_rate;
                    additionalKgRate = shippingData.additional_kg_charge.ksa;
                }
                else if (shipping_info.country === "pk") {
                    countryShipRate = shippingData.pk_rate;
                    additionalKgRate = shippingData.additional_kg_charge.pk;
                }
                if (totalWeight <= 5100) return countryShipRate
                const additionalWeight = totalWeight - 5100
                const additionalCharges = (additionalWeight / 1000) * (additionalKgRate || 1)
                return additionalCharges + countryShipRate
            }

            let finalShippingFees = 0;
            if (shipping_info.delivery_option === "free_shipping" && isEligibleForFreeShipping()) finalShippingFees = 0;
            else finalShippingFees = getTotalShippingFee()

            if (!mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "user_id is not a valid." })
            let user = await User.findById(user_id)
            if (!user) user = await GuestUser.findById(user_id)
            if (!user) return res.status(404).json({ success: false, msg: "User does not exist with corresponding user_id." })

            const orderSession = await OrderSession.create({
                user_id: user._id,
                is_guest,
                name: shipping_info.name,
                email: shipping_info.email,
                order_items: finalOrderItems,
                shipping_address: shipping_info.shipping_address,
                billing_address: shipping_info.billing_address,
                price_details: {
                    total_price: totalPrice,
                    shipping_fees: finalShippingFees,
                    currency: shipping_info.currency
                }
            })

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: Math.floor(finalShippingFees * rate * 100),
                                currency: shipping_info?.currency?.toLowerCase() || "aed",
                            },
                            display_name: shipping_info.delivery_option,
                            // delivery_estimate: {
                            //     minimum: {
                            //         unit: 'business_day',
                            //         value: 1,
                            //     },
                            //     maximum: {
                            //         unit: 'business_day',
                            //         value: 1,
                            //     },
                            // },
                        }
                    }
                ],
                line_items: finalOrderItems.map((product, index) => {
                    return {
                        price_data: {
                            currency: shipping_info?.currency?.toLowerCase() || "aed",
                            product_data: {
                                name: product.name,
                                images: [product.image]
                            },
                            unit_amount: Math.floor(product.price * rate * 100),
                        },
                        quantity: product.quantity
                    }
                }),
                payment_intent_data: {
                    receipt_email: shipping_info.email,
                    metadata: { order_session_id: orderSession._id.toString() }
                },
                customer_email: shipping_info.email,
                client_reference_id: shipping_info.name,
                mode: 'payment',
                success_url: `${process.env.HOST}/checkout/thanks?o_session_id=${orderSession._id}`,
                cancel_url: `${process.env.HOST}/checkout/step1?payment=false`
            });
            const { url } = session
            res.json({
                success: true,
                url
            })

        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: POST" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal Server Error occurred. Please retry later." })
    }
}