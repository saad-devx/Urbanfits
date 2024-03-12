const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import Order from "@/models/orders"
import Giftcard from "@/models/giftcard";
import Coupon from "@/models/coupon";
import User from "@/models/user";
import { verify } from "jsonwebtoken"
import { parse } from "cookie";
import { isValidObjectId } from "mongoose";
import { GetUFBalance, DeductPoints } from "@/utils/uf-points";
import { HashValue, getDateOfTimezone } from "@/utils/cyphers.js";
import { isProdEnv, shippingRates, paymentOptions, giftCardPrices } from "@/uf.config";
import OrderConfirmed from "@/email templates/order_confirm";
import sendEmail from "@/utils/sendEmail";
import uploadImage from "@/utils/uploadImage";
import { sendNotification, sendAdminNotification } from "@/utils/send_notification";
import { serialize } from "cookie";
import axios from "axios";
import StandardApi from "@/middlewares/standard_api";

const shippingMethods = Object.keys(shippingRates);
const handler = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {

    let currentUser;
    const { "session-token": sessionToken } = parse(req.headers.cookie || '');
    if (!sessionToken) currentUser = null;
    try { currentUser = verify(sessionToken, process.env.NEXT_PUBLIC_SECRET_KEY) }
    catch (e) { currentUser = null }
    if (!isValidObjectId(currentUser._id)) return res.status(401).json({ success: false, msg: "Your session is either invalid or expired, please sign in." })

    const { shipping_info, order_items } = req.body.payload;
    if (!shipping_info || !order_items || !order_items.length) return res.status(400).json({ success: false, msg: "All valid shipping information and ordered items are required. Body parameters: shipping_info (object), order_items (array)" })
    else if (!shippingMethods.includes(shipping_info.delivery_option)) return res.status(400).json({ success: false, msg: "Invalid shipping method, Available method args: " + shippingMethods })
    if (shipping_info.gift_code && (shipping_info.gift_code.length < 8 || shipping_info.gift_code.length > 10)) return res.status(400).json({ success: false, msg: "Invalid Gift Code format." })
    if (shipping_info.coupon_code && shipping_info.coupon_code.length < 4) return res.status(400).json({ success: false, msg: "Invalid Coupon Code format." })
    // if (shipping_info.points_to_use && !shipping_info.card_number) return res.status(400).json({ success: false, msg: "user uf card number is required." })
    await ConnectDB()
    if (currentUser) {
        let foundUser = await User.findById(currentUser._id).lean();
        if (!foundUser) return res.status(404).json({ success: false, msg: "User does not exist with corresponding identifier." })
    }
    // initializing discounts by UF-points and Giftcodes if exists
    let discountByPoints = 0;
    let discountByGiftcode = 0;
    let discountByCoupon = 0;
    let earnedPoints = 0;
    let appliedGiftCard = null;
    let appliedCoupon = null;
    if (shipping_info.points_to_use && shipping_info.card_number) {
        const user = await User.findById(currentUser._id).lean();
        if (!user) return res.status(400).json({ success: false, msg: "Invalid user id or uf-card number" });
        const ufBalance = await GetUFBalance(user._id, user.uf_wallet.card_number, user.timezone);
        if (shipping_info.points_to_use > ufBalance) return res.status(400).json({ success: false, msg: "You can't use more uf-points than your balance." })
        await DeductPoints(user._id, user.uf_wallet.card_number, user.timezone, shipping_info.points_to_use)
        discountByPoints = shipping_info.points_to_use * parseFloat(process.env.NEXT_PUBLIC_UF_POINT_RATE)
    }
    if (shipping_info.gift_code?.length && shipping_info.gift_code.length > 8) {
        const hashedGiftcode = HashValue(shipping_info.gift_code);
        const giftCard = await Giftcard.findOne({ gift_code: hashedGiftcode }).lean();
        if (!giftCard) return res.status(400).json({ success: false, msg: "Gift code either expired or doesn't exists." })
        else {
            discountByGiftcode = giftCard.price;
            appliedGiftCard = structuredClone(giftCard);
            console.log(appliedGiftCard);
        }
    }

    // const rate = 1; // Currency rate i.e. 1 AED
    const orderItemsToProcess = order_items.filter(item => !item.id.startsWith("giftcard_"))
    const giftCardItems = order_items.filter(item => item.id.startsWith("giftcard_"))

    let finalOrderItems = []
    for (const orderItem of orderItemsToProcess) {
        const dbProduct = await Product.findById(orderItem.product_id).lean();
        if (!dbProduct) return res.status(400).json({ success: false, msg: "Either one of the specified product IDs does not exist or the product IDs were tempered." });
        const respectedVariant = dbProduct.variants.find(variant => variant._id.toString() === orderItem?.variant_id || '');
        if (!respectedVariant) return res.status(400).json({ success: false, msg: "Each order item must have a vaild existing `variant_id`." });
        const respectedSize = respectedVariant.sizes.find(sizeObj => sizeObj.size.toLowerCase() === orderItem.size.toLowerCase());
        if (!respectedSize || respectedSize.quantity < orderItem.quantity) return res.status(400).json({ success: false, msg: `Selected size of ${dbProduct.name}'s ${respectedVariant.color_name} variant is currently unavailable.` })

        const finalProduct = {
            product_id: dbProduct._id,
            variant_id: orderItem.variant_id,
            name: dbProduct.name,
            price: dbProduct.sale_price || dbProduct.price,
            image: respectedVariant.images[0],
            sku: respectedVariant.sku + "-" + orderItem.size + orderItem.size,
            variant: orderItem?.color || '',
            uf_points: orderItem?.uf_points || 0,
            size: orderItem.size,
            quantity: orderItem.quantity,
            weight: dbProduct.shipping_details.weight
        }
        earnedPoints += orderItem.quantity * dbProduct.uf_points || 0;
        finalOrderItems.push(finalProduct)
    }

    let totalPrice = giftCardItems.length ? giftCardItems.reduce((accum, item) => accum + giftCardPrices[item.id], 0) : 0;
    for (const item of finalOrderItems) {
        const itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;
    }

    const getTotalShippingFee = () => {
        const weighingItem = finalOrderItems.find((item) => item.weight && item.weight !== undefined)
        if (!weighingItem) return 0
        const shippingData = shippingRates[shipping_info.delivery_option];
        if (shippingData.time_limit) {
            const userTimezone = currentUser ? currentUser.timezone : "Asia/Dubai";
            const currentTimeStamp = getDateOfTimezone(userTimezone).getTime();
            if (currentTimeStamp > shippingData.time_limit) return res.status(400).json({ success: false, msg: `You can't use ${shippingData.name} shipping method after ${new Date(shippingData.time_limit).getHours() % 12} : ${new Date(shippingData.time_limit).getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}` })
        }

        const totalWeight = finalOrderItems.reduce((accValue, item) => (accValue + item.weight * item.quantity), 0);
        if (totalWeight <= 5100) return shippingData.rate;
        const additionalWeight = totalWeight - 5100;
        const additionalCharges = (additionalWeight / 1000) * (shippingData.additional_kg_charge);
        return additionalCharges + shippingData.rate;
    }
    let finalShippingFees = getTotalShippingFee();

    // Calculating the coupon discount
    if (shipping_info.coupon_code) {
        const hashedCouponCode = HashValue(shipping_info.coupon_code);
        const coupon = await Coupon.findOne({ coupon_code: hashedCouponCode }).lean();
        if (!coupon) return res.status(400).json({ success: false, msg: "Coupon code is either invalid or expired." })

        if (coupon.coupon_config.coupon_usage_limit && typeof coupon.coupon_config.coupon_usage_limit === "number" && coupon.coupon_config.coupon_usage_limit < 1) discountByCoupon = 0;
        const config = coupon.coupon_config;

        if (config.allowed_emails.length && !config.allowed_emails.includes(currentUser?.email)) discountByCoupon = 0;
        if ((config.minimum_spend && totalPrice < config.minimum_spend) || (config.maximum_spend && totalPrice > config.maximum_spend)) discountByCoupon = 0;

        let eligibleProducts = structuredClone(finalOrderItems)
        if (config.allowed_products.length) eligibleProducts = finalOrderItems.filter(p => config.allowed_products.includes(p.product_id))
        if (config.allowed_categories?.length) eligibleProducts = eligibleProducts.filter(p => p.categories.some(categ => config.allowed_categories.includes(categ)))

        if (config.exclude_sales) eligibleProducts = finalOrderItems.filter(p => !p.sale_price)

        if (config.exclude_products?.length) eligibleProducts = eligibleProducts.filter(p => !config.exclude_products.includes(p.product_id))
        if (config.exclude_categories?.length) eligibleProducts = eligibleProducts.filter(p => !p.categories.some(categ => config.exclude_categories.includes(categ)))

        const eligibleProductsPrice = eligibleProducts.reduce((acc, p) => acc + p.price, 0);
        if (eligibleProductsPrice >= coupon.coupon_value) discountByCoupon = coupon.coupon_value;
        else discountByCoupon = eligibleProductsPrice;
        appliedCoupon = coupon;
    }

    const overallDiscount = discountByPoints + discountByGiftcode + discountByCoupon;
    const amountAfterDiscounts = Math.abs(totalPrice + finalShippingFees - overallDiscount);

    // Calculating the payment method charges
    const selectedPaymentMethod = paymentOptions[shipping_info.payment_option];
    let paymentDiscount = 0;
    if (selectedPaymentMethod.rate) paymentDiscount = amountAfterDiscounts / 100 * selectedPaymentMethod.rate;
    else if (selectedPaymentMethod.discount) paymentDiscount = -amountAfterDiscounts / 100 * selectedPaymentMethod.discount;

    const FinalPayableAmount = amountAfterDiscounts + paymentDiscount;

    // Creating order session data
    // const orderSession = await OrderSession.create({
    const orderSession = {
        ...(currentUser ? { user_id: currentUser._id } : { is_guest: true }),
        ...(currentUser && { earned_points: earnedPoints }),
        name: shipping_info.name,
        email: shipping_info.email,
        order_items: finalOrderItems,
        shipping_address: shipping_info.shipping_address,
        points_used: shipping_info?.points_to_use || 0,
        ...(giftCardItems.length && { gift_cards: giftCardItems }),
        ...(appliedGiftCard && { gift_card: appliedGiftCard._id }),
        ...(appliedCoupon && { coupon: appliedCoupon }),
        shippping_method: shipping_info.delivery_option,
        payment_method: shipping_info.payment_option,
        discounts: {
            points: discountByPoints,
            coupon: discountByCoupon,
            gift_card: discountByGiftcode,
            payment: paymentDiscount > 0 ? 0 : paymentDiscount
        },
        price_details: {
            sub_total: totalPrice,
            total: FinalPayableAmount,
            shipping_fees: finalShippingFees,
            total_discount: discountByPoints + discountByGiftcode + discountByCoupon
        }
    }

    const createOrder = async (orderPayload, shippingMethod) => {
        const orderData = (await Order.create(orderPayload)).toObject();
        const { shipping_address } = shipping_info;

        const swiftOrderData = {
            reference: orderData._id.toString(),
            brandName: "Urban Fits",
            retailerLocationIdentifier: parseFloat(process.env.NEXT_PUBLIC_SWFT_PICKUP_LOCATION_ID),

            customerInfo: {
                name: shipping_address.firstname + ' ' + shipping_address.lastname || '',
                phone: shipping_address.phone_prefix + ' ' + shipping_address.phone_number,
                email: shipping_info.email,
                country: "United Arab Emirates",
                city: shipping_address.city,
                countryCode: "ae",
                addressLine1: shipping_address.address,
                ...(shipping_address.apt_suite && {
                    addressLine2: shipping_address.apt_suite,
                    landMark: shipping_address.apt_suite
                })
            },

            paymentAmount: FinalPayableAmount,
            profileName: shippingRates[shippingMethod].swft_profile,
            requireCustomerProofSignature: true,

            items: [
                ...orderData.order_items.map(item => ({
                    ...item,
                    weight: parseFloat(item.weight),
                    variantId: item.variant_id,
                    skuNumber: item.sku,
                    weightUnit: "grams"
                })),

                // orderData.gift_cards.map(card => ({
                //     quantity: 0,
                //     name: "string",
                //     price: 0,
                //     weight: 0,
                //     weightUnit: "string",
                //     sku: "string",
                //     skuNumber: "string",
                //     variantId: "string",
                //     variantType: "string",
                //     description: "string"
                // }))
            ]
        }

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SWFT_BASE_ENDPOINT}/api/direct-integration/orders`,
            swiftOrderData,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_SWFT_KEY
                }
            });
        // console.log(data)
        const swiftRes = data.data[0];

        const shippingLabelData = Buffer.from(swiftRes.shippingLabel, 'base64');
        const shippingLabelUrl = await uploadImage(shippingLabelData, `uf-shipping-labels/${orderData._id.toString()}`)

        const finalOrder = await Order.findByIdAndUpdate(orderData._id.toString(), {
            order_status: { status: swiftRes.status },
            stage: swiftRes.stage,
            shipping_label_url: shippingLabelUrl,
            tracking_number: swiftRes.swftboxTracking,
            tracking_url: swiftRes.trackingUrl,
        }, { lean: true, new: true });
        // Subtracting the bought quantity from each of the ordered product
        const orderedItems = finalOrder.order_items;
        for (const orderedItem of orderedItems) {
            Product.updateOne(
                {
                    _id: mongoose.Types.ObjectId(orderedItem.product_id)
                },
                {
                    $inc: {
                        "variants.$[v].sizes.$[s].quantity": -orderedItem.quantity
                    }
                },
                {
                    arrayFilters: [
                        { "v._id": mongoose.Types.ObjectId(orderedItem.variant_id) },
                        { "s.size": orderedItem.size.toUpperCase() }
                    ]
                }
            )
        }
        // Sending notifications
        sendAdminNotification({
            category: "order",
            data: {
                title: "New Order",
                msg: `A new order just received !`,
                type: "success"
            }
        })
        if (orderData.user_id) sendNotification(orderData.user_id, {
            category: "order",
            heading: "Order Placed",
            mini_msg: "You order have been placed successfully and currently is in PROCESSING status. The order tracking details have been sent on your email. Thanks for you purchase!",
            type: "order",
            message: `You order have been placed successfully and currently is in PROCESSING status. Here's your Tracking Number: "${finalOrder.tracking_number}". Further details have been sent on your email. Thanks for you purchase!`,
        })

        res.status(201).json({
            success: true,
            msg: "Checkout successful, the total bill was " + FinalPayableAmount,
            order_data: finalOrder
        })
        // Sending confirmation email to customer
        let template = OrderConfirmed(finalOrder)
        sendEmail({ to: orderPayload.email, subject: "Your order has been placed." }, template)
    }

    if (shipping_info.payment_option === "cash_on_delivery") await createOrder(orderSession);
    else if (shipping_info.payment_option === "online_payment") {

        // Create Checkout Sessions from body params.
        const stripSession = await stripe.checkout.sessions.create({
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: Math.floor(finalShippingFees * 100),
                            currency: "aed",
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
            // line_items: finalOrderItems.map((product, index) => {
            //     let unitAmount = 0;
            //     if (product.price > discountByPoints) {
            //         unitAmount = Math.floor(product.price * 100) - Math.floor(discountByPoints * 100)
            //         discountByPoints = product.price - ((unitAmount / 100) - discountByPoints)
            //         console.log(discountByPoints)
            //     }
            //     else discountByPoints = discountByPoints - product.price
            //     return {
            //         price_data: {
            //             currency: shipping_info?.currency?.toLowerCase() || "aed",
            //             product_data: {
            //                 name: product.name,
            //                 images: [product.image]
            //             },
            //             unit_amount: unitAmount * rate,
            //         },
            //         quantity: product.quantity
            //     }
            // }),
            line_items: [
                {
                    price_data: {
                        currency: shipping_info?.currency?.toLowerCase() || "aed",
                        unit_amount: Math.floor(FinalPayableAmount * 100),
                        product_data: { name: "Payable Amount" }
                    },
                    quantity: 1,
                },
            ],
            payment_intent_data: {
                receipt_email: shipping_info.email,
                // metadata: { order_session_id: orderSession._id.toString() }
            },
            customer_email: shipping_info.email,
            client_reference_id: shipping_info.name,
            mode: 'payment',
            success_url: true,
            cancel_url: false
        });
        const payment_success = stripSession.url;

        const orderSessionCookie = serialize('order_session', JSON.stringify(orderSession), {
            httpOnly: true,
            sameSite: isProdEnv ? "none" : "lax",
            domain: isProdEnv ? ".urbanfits.ae" : "localhost",
            path: "/",
            secure: isProdEnv,
            maxAge: expiryDate
        })
        res.setHeader('Set-Cookie', orderSessionCookie);

        res.status(201).json({
            success: true,
            payment_success,
            msg: payment_success ? "Payment Successful. Thanks for you purchase!" : "Payment Unsuccessful"
        })
    };
})
export default handler