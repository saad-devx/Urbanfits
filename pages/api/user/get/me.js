import ConnectDB from "@/utils/connect_db"
import User from "@/models/user";
import StandardApi from "@/middlewares/standard_api";

const getMyData = async (req, res) => StandardApi(req, res, {}, async () => {
    await ConnectDB()
    const user = await User.findById(req.user_id)
    res.status(200).json({ success: true, user })
})
export default getMyData