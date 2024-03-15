import ConnectDB from "@/utils/connect_db"
import Order from "@/models/orders";
import StandardApi from "@/middlewares/standard_api";
import { orderStatuses } from "@/uf.config";

const ChangeOrderStatus = async (req, res) => StandardApi(req, res, { verify_admin: true }, async () => {
    const { order_id, order_status } = req.query;
    if (!order_id || order_id.length < 18) return res.status(400).json({ success: false, msg: "Invalid Order Identifier" })
    if (!order_status || !Object.keys(orderStatuses).includes(order_status)) return res.status(400).json({ success: false, msg: "Invalid Order Status" })
    await ConnectDB()

    let order = await Order.findByIdAndUpdate(order_id, {
        order_status: {
            status: order_status,
            group: orderStatuses[order_status].group
        }
    }, { new: true, lean: true })

    res.status(200).json({
        success: true,
        order,
        msg: "Order status updated successfully"
    })
})
export default ChangeOrderStatus