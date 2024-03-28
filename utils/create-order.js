import mongoose from "mongoose";
import Product from "@/models/product"
import Order from "@/models/orders"
import { shippingRates } from "@/uf.config";
import GiftCardTemplate from "@/email templates/gift_card";
import OrderConfirmed from "@/email templates/order_confirm";
import sendEmail from "@/utils/sendEmail";
import generatePassword from "./cyphers";
import { sendNotification, sendAdminNotification } from "@/utils/send_notification";
import axios from "axios";

const CreateOrder = async (orderPayload) => {
    const orderData = (await Order.create(orderPayload)).toObject();
    const { shipping_address, payment_method } = orderData;

    const includesGiftCard = orderData.gift_cards.some(item => item.is_giftcard);

    if (includesGiftCard) {
        const giftData = orderData.gift_cards[0];
        const giftQty = giftData.quantity;
        let giftCodes = [];
        for (let i = 0; i < giftQty; i++) {
            const giftCode = generatePassword(10);
            giftCodes.push(giftCode);
        }
        console.log(giftCodes);

        const receiver = await User.findOne({ email: giftData.receiver.email })

        // Sending confirmation email to customer
        let giftTemplate = GiftCardTemplate(giftData, giftCodes);
        sendEmail({ to: receiver.email, subject: "Congratulation, You've got a gift!" }, giftTemplate)
        let orderTemplate = OrderConfirmed(finalOrder)
        sendEmail({ to: orderData.email, subject: "Your order has been placed." }, orderTemplate)

        // Sending notifications
        sendAdminNotification({
            category: "order",
            data: {
                title: "New Order",
                msg: "A new order just received !",
                type: "success"
            }
        })
        if (orderData.user_id) sendNotification(orderData.user_id, {
            category: "order",
            heading: "Order Placed",
            mini_msg: "You order have been placed successfully. Thanks for your purchase!",
            type: "order",
            message: "You order have been placed and successfully have been delivered to your friend as a gift. A confirmation email is also have been sent to you. Thanks for you purchase!",
        })
        const occassion = giftData.cover.includes("birthday") ? "Happy Birthday" : "Happy Christmas";
        sendNotification(receiver._id, {
            category: "primary",
            heading: "Gift for " + occassion + "!",
            mini_msg: "Congratulations, you've received a gift from your friend!",
            type: "order",
            message: `Congratultions, you have received an E-Giftcard from your friend ${giftData.sender.name}. They wish you ${occassion} by this gift. You can do ${giftData.quantity * giftData.price} AED worth of shopping on Urban Fits for free. Please refer to you email "${receiver.email}" inbox for Gift Code. Thanks!`,
        })
    }
    else {
        const swiftOrderData = {
            reference: orderData._id.toString(),
            brandName: "Urban Fits",
            retailerLocationIdentifier: parseFloat(process.env.NEXT_PUBLIC_SWFT_PICKUP_LOCATION_ID),

            customerInfo: {
                name: shipping_address.firstname + ' ' + shipping_address.lastname || '',
                phone: shipping_address.phone_prefix + ' ' + shipping_address.phone_number,
                email: orderData.email,
                country: "United Arab Emirates",
                city: shipping_address.city,
                countryCode: "ae",
                addressLine1: shipping_address.address,
                ...(shipping_address.apt_suite && {
                    addressLine2: shipping_address.apt_suite,
                    landMark: shipping_address.apt_suite
                })
            },

            paymentAmount: payment_method === "cash_on_delivery" ? orderData.price_details.total : 0,
            paymentMode: payment_method === "cash_on_delivery" ? "PAYMENT_ON_DELIVERY" : "PRE_PAID",
            profileName: shippingRates[orderData.shippping_method].swft_profile,
            requireCustomerProofSignature: true,

            items: orderData.order_items.map(item => ({
                ...item,
                weight: parseFloat(item.weight),
                variantId: item.variant_id,
                skuNumber: item.sku,
                weightUnit: "grams"
            }))
        }

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SWFT_BASE_ENDPOINT}/api/direct-integration/orders`,
            swiftOrderData,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_SWFT_KEY
                }
            });
        const swiftRes = data.data[0];

        // const shippingLabelData = Buffer.from(swiftRes.shippingLabel, 'base64');
        // const shippingLabelUrl = await uploadImage(shippingLabelData, `uf-shipping-labels/${orderData._id.toString()}`)

        const finalOrder = await Order.findByIdAndUpdate(orderData._id.toString(), {
            "order_status.status": swiftRes.status,
            stage: swiftRes.stage,
            shipping_label_url: swiftRes.shippingLabelUrl,
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

        // Sending confirmation email to customer
        let template = OrderConfirmed(finalOrder)
        sendEmail({ to: orderPayload.email, subject: "Your order has been placed." }, template)

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
            mini_msg: "You order have been placed successfully. Thanks for your purchase!",
            type: "order",
            message: `You order have been placed successfully and currently is in PROCESSING status. Here's your Tracking Number: "${finalOrder.tracking_number}". Further details have been sent on your email. Thanks for you purchase!`,
        })

        return finalOrder
    }
}

export default CreateOrder