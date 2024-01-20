import ConnectDB from "@/utils/connect_db"
import mongoose from "mongoose"
import UfTasks from "@/models/uf-tasks"
import { sendNotification } from "@/utils/send_notification";
import StandardApi from "@/middlewares/standard_api";

const FulfillUfTask = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { user_id, task_name, image_url } = req.body;
    if (!mongoose.Types.ObjectId.isValid(user_id) || !task_name || !image_url) return res.status(405).json({ success: false, msg: "Both task_name and image_url Query paramters are required." })
    await ConnectDB()

    const userTasks = await UfTasks.findOneAndUpdate(
        { user_id, tasks: { $elemMatch: { name: task_name } } },
        { "tasks.$.image": image_url },
        { new: true }
    )

    await sendNotification(user._id, {
        category: "account",
        heading: "Login",
        type: "login",
        mini_msg: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`,
        message: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`
    }, { notify: true, notifySilently: true })
    res.status(200).json({ userTask: userTasks.tasks[4] })
})
export default FulfillUfTask