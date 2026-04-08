import ConnectDB from "@/utils/connect_db";
import { isValidObjectId } from "mongoose";
import User from "@/models/user"
import { AddPoints } from "@/utils/uf-points";
import { sendNotification } from "@/utils/send_notification";
import StandardApi from "@/middlewares/standard_api";

const AddUFpoints = async (req, res) => StandardApi(req, res, { method: "POST", verify_admin: true }, async () => {
    const { card_number, user_id, source, points, expiration_date, notific_params } = req.body;
    if (!card_number || !isValidObjectId(user_id) || !source) return res.status(400).json({ success: false, msg: "Invalid arguments." })
    await ConnectDB()

    const user = await User.findOne({ _id: user_id, "uf_wallet.card_number": card_number }).lean();
    if (!user) return res.status(401).json({ success: false, msg: "Invalid information of user or uf-card" })
    if (points !== 0) {
        await AddPoints(user._id, user.uf_wallet.card_number, user.timezone, {
            earned: parseFloat(points),
            source,
            ...(expiration_date && { expirationDate: expiration_date })
        });
        await sendNotification(user._id, notific_params, { notify: true });
    }

    res.status(200).json({
        success: true,
        msg: "Points added successfully",
    })
})

export default AddUFpoints