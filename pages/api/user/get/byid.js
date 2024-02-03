import ConnectDB from "@/utils/connect_db"
import User from "@/models/user";
import mongoose from "mongoose";
import StandardApi from "@/middlewares/standard_api";

const getUserById = async (req, res) => StandardApi(req, res, { verify_admin: true }, async () => {
    const { user_to_get } = req.query
    if (!mongoose.Types.ObjectId(user_to_get)) return res.status(400).json({ success: false, msg: "A valid user id required. Query parameters: user_to_get" })

    await ConnectDB()
    const userToGet = await User.findById(user_to_get)
    if (!userToGet) return res.status(404).json({ success: false, msg: "The user with corresponding id does not exist." })
    delete userToGet.password

    res.status(200).json({
        success: true,
        user: userToGet
    })
})
export default getUserById