import ConnectDB from "@/utils/connect_db";
import Product from "@/models/product";
import Order from "@/models/orders";
import { sendAdminNotification } from "@/utils/send_notification";
import StandardApi from "@/middlewares/standard_api";

const TestApiHandler = (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    await ConnectDB()

    await sendAdminNotification({
        category: "order",
        data: {
            title: "Order Status updated",
            msg: `An order's status just got updated by Swft Box.`,
            href: `/orders`,
            type: "info"
        }
    })

    res.status(200).json({
        success: true,
        msg: "order creations fucking completed ",
        // order
        // balance1, deduct, balance2
    })
})

export default TestApiHandler