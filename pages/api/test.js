import ConnectDB from "@/utils/connect_db";
import Order from "@/models/orders";
// import sendEmail from "@/utils/sendEmail";
import OrderConfirmed from "@/email templates/order_confirm";
import { sendAPIEmail } from "@/utils/sendEmail";

const TestApiHandler = async (req, res) => {
    await ConnectDB();
    const order = await Order.findById("664cfc8715095a614bd550ac").lean();

    let template = OrderConfirmed(order)

    sendAPIEmail({ to: "binarshadsaad6@gmail.com", subject: "Your order has been placed.", template })

    res.status(200).json({
        success: true,
        msg: "The work's done!"
    })
}
export default TestApiHandler