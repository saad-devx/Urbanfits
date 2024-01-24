import ConnectDB from "@/utils/connect_db"
import UfTasks from "@/models/uf-tasks";
import StandardApi from "@/middlewares/standard_api";
import mongoose from "mongoose";

const getUserTasks = async (req, res) => StandardApi(req, res, {}, async () => {
    await ConnectDB()
    const { user_id } = req.query;
    if (!mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "A valid user_id patameer is required." })

    const tasks = await UfTasks.findOne({ user_id }).populate("user_id")
    res.status(200).json({
        success: true,
        msg: '',
        tasks
    })
})
export default getUserTasks