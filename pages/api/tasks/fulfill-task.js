import ConnectDB from "@/utils/connect_db"
import mongoose from "mongoose"
import UfTasks from "@/models/uf-tasks"
import CorsMiddleware from "@/utils/cors-config";
import sendNotification from "@/utils/send_notification";

const FulfillUfTask = async (req, res) => {
    try {
        if (req.method === "PUT") {
            await CorsMiddleware(req, res)
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

        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed methods: 'PUT'" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, msg: "Internal Server Error occurred, please trey again in a while.", error })
    }
}

export default FulfillUfTask