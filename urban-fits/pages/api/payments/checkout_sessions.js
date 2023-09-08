const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import OrderSession from "@/models/order_session";
import mongoose from "mongoose";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { user_id, shipping_info, order_items } = req.body
            if (!shipping_info || !order_items || !order_items.length) return res.status(400).json({ success: false, msg: "All valid shipping information and ordered items are required. Body parameters: shipping_info (object), order_items (array), user_id (must provide if user session exists)" })
            await ConnectDB()

            let finalOrderItems = []
            for (const orderItem of order_items) {
                const dbProduct = await Product.findById(orderItem.product_id)
                if (!dbProduct) return res.status(400).json({ success: false, msg: "Either specified product IDs does not exist or the product IDs were tempered." })
                if (!orderItem.original_id) return res.status(400).json({ success: false, msg: "Each order item must have a `original_id` property with the value of its unique variant id." })
                const filteredArray = dbProduct.variants.filter(variant => variant._id.toString() === orderItem.original_id.toString())
                if (!filteredArray || !filteredArray.length) return res.status(400).json({ success: false, msg: "Either specified product IDs does not exist or the product IDs were tempered." })

                const filteredProduct = filteredArray[0]
                const finalProduct = {
                    name: dbProduct.name,
                    price: dbProduct.price,
                    image: filteredProduct.images[0],
                    quantity: orderItem.quantity
                }
                finalOrderItems.push(finalProduct)
            }

            let totalPrice = 0;
            for (const item of finalOrderItems) {
                const itemPrice = item.price * item.quantity
                totalPrice += itemPrice
            }
            console.log(totalPrice)

            const orderSession = await OrderSession.create({
                ...(user_id && mongoose.Types.ObjectId.isValid(user_id) && { user_id }),
                name: shipping_info.name,
                email: shipping_info.email,
                order_items,
                shipping_address: shipping_info.shipping_address,
                billing_address: shipping_info.billing_address,
                price_details: {
                    total_price: totalPrice
                }
            })

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: 1500,
                                currency: 'usd',
                            },
                            display_name: 'Next day air',
                            delivery_estimate: {
                                minimum: {
                                    unit: 'business_day',
                                    value: 1,
                                },
                                maximum: {
                                    unit: 'business_day',
                                    value: 1,
                                },
                            },
                        }
                    }
                ],
                line_items: finalOrderItems.map((product, index) => {
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product.name,
                                images: [product.image]
                            },
                            unit_amount: Math.floor(product.price * 100),
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
            res.send(url)

        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, msg: "Internal Server Error occurred. Please retry later." })
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}