import mongoose from "mongoose";
import Product from "@/models/product"
import Order from "@/models/orders"
import { shippingRates } from "@/uf.config";
import OrderConfirmed from "@/email templates/order_confirm";
import sendEmail from "@/utils/sendEmail";
import uploadImage from "@/utils/uploadImage";
import { sendNotification, sendAdminNotification } from "@/utils/send_notification";
import axios from "axios";

const CreateOrder = async (orderPayload) => {
    const orderData = (await Order.create(orderPayload)).toObject();
    const { shipping_address } = orderData;

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

        paymentAmount: orderData.price_details.total,
        profileName: shippingRates[orderData.shippping_method].swft_profile,
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

    // Sending confirmation email to customer
    let template = OrderConfirmed(finalOrder)
    sendEmail({ to: orderPayload.email, subject: "Your order has been placed." }, template)

    return finalOrder
}

export default CreateOrder