import ConnectDB from "@/utils/connect_db"
import Addresses from "@/models/addresses"
import User from "@/models/user"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import StandardApi from "@/middlewares/standard_api"

const GetAddress = async (req, res) => StandardApi(req, res, {}, async () => {
    const { user_id } = req.query
    if (!user_id || !mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "A valid user id required. Query parameter: user_id" })
    await ConnectDB()

    let user = await User.findById(user_id)
    if (!user) return res.status(404).json({ success: false, msg: "User not found with corresponding user_id." })
    let addresses = await Addresses.findOne({ user_id })
    if (!addresses) return res.status(404).json({ success: false, msg: "No address record found for this user." })
    const payload = jwt.sign({ ...addresses }, process.env.NEXT_PUBLIC_SECRET_KEY)
    res.status(200).json({
        success: true,
        payload
    })
})
export default GetAddress