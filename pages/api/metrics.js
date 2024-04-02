import ConnectDB from "@/utils/connect_db";
import Signs from "@/models/signs";
import Order from "@/models/orders";
import Product from "@/models/product";
import Category from "@/models/category";
import StandardApi from "@/middlewares/standard_api";

const UserVisit = async (req, res) => StandardApi(req, res, { method: "GET", verify_user: false }, async () => {
    await ConnectDB();

    // Signs metrics
    const signMetrics = await Signs.find().sort({ _id: -1 }).limit(180);
    const signsLength = signMetrics.length;
    const totalSignUps = signMetrics.reduce((acc, item) => acc + item.signups, 0);
    const totalVisits = signMetrics.reduce((acc, item) => acc + item.visits, 0);

    // Order metrics
    const total_orders = await Order.countDocuments({ "order_status.group": { $ne: "cancelled" } });
    const cancelled_orders = await Order.countDocuments({ "order_status.group": "cancelled" })

    // Product metrics
    const total_products = await Product.countDocuments();
    const total_category = (await Category.countDocuments()) - 1;

    const metrics = {
        avg_signups: totalSignUps / signsLength,
        avg_visits: totalVisits / signsLength,
        total_orders,
        cancelled_orders,
        total_products,
        total_category
    }
    res.status(200).json({ success: true, msg: '', metrics })
})
export default UserVisit;