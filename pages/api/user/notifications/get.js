import ConnectDB from "@/utils/connect_db"
import Notification from "@/models/notification";
import mongoose from "mongoose";
import StandardApi from "@/middlewares/standard_api";

const getUserNotifications = async (req, res) => StandardApi(req, res, {}, async () => {
    const { user_id } = req.query
    if (!user_id || !mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "A valid user id required. Query parameters: user_id" })
    await ConnectDB()

    const userNotifications = await Notification.findOne({ user_id: mongoose.Types.ObjectId(user_id) })
    return res.status(200).json({
        success: true,
        notification_data: userNotifications || []
    })
})
export default getUserNotifications