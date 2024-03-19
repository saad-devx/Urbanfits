import ConnectDB from "@/utils/connect_db";
import { sendNotification, sendAdminNotification } from "@/utils/send_notification";
import Order from "@/models/orders";

const shipmentWebhookHandler = async (req, res) => {
    const { order: {
        reference,
        status,
        state,
        shippingLabelUrl
    } } = req.body;
    await ConnectDB()

    const order = await Order.findByIdAndUpdate(reference, {
        status,
        state,
        shippingLabelUrl
    }, { new: true, lean: true });


    await sendAdminNotification({
        category: "order",
        data: {
            title: "Order Status updated",
            msg: `An order's status just got updated by Swft Box.`,
            href: `/orders/${order._id}`,
            type: "info"
        }
    })
    await sendNotification(order.user_id, {
        category: "order",
        heading: "Order Updated",
        mini_msg: `You order's status just updated to "${status}"!`,
        type: "order",
        message: `You order's status just updated by our shipping partners to "${status}" of group "${order.order_status.group}"!`,
    })
    res.status(200).send("OK")
}

export default shipmentWebhookHandler