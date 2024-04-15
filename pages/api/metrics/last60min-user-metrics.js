import ConnectDB from "@/utils/connect_db";
import Signs from "@/models/signs";
import StandardApi from "@/middlewares/standard_api";

const Last60minActivity = async (req, res) => StandardApi(req, res, { verify_admin: true }, async () => {
    await ConnectDB();

    const currentDate = new Date();
    let past_60_min_activity = [];

    for (let mins of [60, 50, 40, 30, 20, 10]) {
        const lastXminActivity = await Signs.countDocuments({
            createdAt: {
                $gt: new Date(currentDate.setMinutes(currentDate.getMinutes() - mins))
            }
        })
        past_60_min_activity.push({
            mins,
            activity_count: lastXminActivity
        })
    }

    res.status(201).json({ success: true, msg: '', past_60_min_activity })
})
export default Last60minActivity;