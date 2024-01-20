import ConnectDB from "@/utils/connect_db"
import Notification from "@/models/notification";
import mongoose from "mongoose";
import StandardApi from "@/middlewares/standard_api";

const updateNotificationStatus = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { user_id, category } = req.query
    if (!user_id || !mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "A valid user id and category (of which notifications are to be updated) are required. Query parameters: user_id, category, status (if not provided then will be assumed 'true')" })
    await ConnectDB()

    await Notification.updateMany(
        {
            user_id,
            "notifications.category": category,
        },
        {
            $set: {
                "notifications.$[element].seen": true,
            },
        },
        {
            arrayFilters: [{ "element.category": category }],
        }
    )

    return res.status(200).json({
        success: true,
        msg: `Notifications of ${category} categroy status updated to ${req.query.status == undefined ? true : req.query.status}`
    })
})
export default updateNotificationStatus