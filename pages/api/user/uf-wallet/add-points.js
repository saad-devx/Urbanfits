import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import User from "@/models/user"
import UFpoints from "@/models/ufpoints"
import { sendNotification } from "@/utils/send_notification";
import SavePointsHistory from "@/utils/save_points_history";
import { EncryptOrDecryptData } from "@/utils/cyphers.js";
import StandardApi from "@/middlewares/standard_api";

const AddUFpoints = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    const { card_number, user_id, source, secret_key, points, duducted, expiration_date, notific_params } = req.body;
    if (!card_number || !mongoose.Types.ObjectId.isValid(user_id) || !source || !secret_key) return res.status(403).json({ success: false, msg: "Invalid arguments." })
    const decryptedSecetKey = EncryptOrDecryptData(secret_key, false)
    if (decryptedSecetKey !== process.env.NEXT_PUBLIC_SECRET_KEY) return res.status(403).json({ success: false, msg: "Invalid Secret Key." })
    await ConnectDB()

    const user = await User.findOne({ _id: user_id, "uf_wallet.card_number": card_number })
    if (!user) return res.status(401).json({ success: false, msg: "Invalid information of user or uf-card" })
    if (points !== 0) {
        await UFpoints.create({
            user_id: user._id,
            card_number: user.uf_wallet.card_number,
            points,
            source,
            ...(expiration_date && { expiration_date })
        })
        await sendNotification(user._id, notific_params, { notify: true, notifySilently: true })
        await SavePointsHistory(user._id, user.uf_wallet.card_number, { earned: points, spent: duducted, source })
    }

    res.status(200).json({
        success: true,
        msg: `Points added successfully.`,
    })
})
export default AddUFpoints