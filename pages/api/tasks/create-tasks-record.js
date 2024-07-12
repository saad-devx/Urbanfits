import ConnectDB from "@/utils/connect_db";
import { isValidObjectId } from "mongoose";
import UfTasks from "@/models/uf-tasks";
import Membership from "@/models/membership";
import { DefaultTasks, membershipData } from "@/uf.config";
import StandardApi from "@/middlewares/standard_api";

const CreateTasksRecord = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    const { user_id } = req.query;
    if (!isValidObjectId(user_id)) return res.status(401).json({
        success: false,
        msg: "A valid user_id is required."
    })
    await ConnectDB();
    await UfTasks.create({
        user_id,
        tasks: DefaultTasks
    })
    console.log("Created the tasks record of the user: " + user_id)
    await Membership.create({
        user_id,
        current_level: {
            title: membershipData.level1.title,
            name: "level1"
        },
        achieved_benefits: membershipData.level1.benefits
    })
    console.log("Created the membership record of the user: " + user_id)
    res.status(200).end()
})
export default CreateTasksRecord