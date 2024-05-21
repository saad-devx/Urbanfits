import ConnectDB from "@/utils/connect_db";
import sendEmail from "@/utils/sendEmail";
import { sendAdminNotification } from "@/utils/send_notification";
import { verify } from "jsonwebtoken";

const SendEmail = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const authToken = authorization.split(" ")[1];
        if (authorization?.split(" ")[0] !== "Bearer" || !authToken) return res.status(403).json({ success: false, msg: "Invalid authorization." });
        const decodedToken = verify(authToken, process.env.NEXT_PUBLIC_SECRET_KEY);
        if (decodedToken.originated_from !== "urbanfits-server") return res.status(403).json({ success: false, msg: "Invalid authorization." });

        await ConnectDB();
        const { to, subject, template } = req.body;

        let info = await sendEmail({ to, subject }, template);
        console.log(info);
        res.status(200).end();

    } catch (e) {
        sendAdminNotification({
            category: "system",
            data: {
                title: "Email error",
                msg: `An email attempt to send to the address: ${to} was failed. The email body is given in the description below.`,
                description: template,
                type: "error"
            }
        })
        console.log(e);
        res.status(500).json({ success: false, msg: "Internal server error occurred, please try again later." })
    }
}
export default SendEmail