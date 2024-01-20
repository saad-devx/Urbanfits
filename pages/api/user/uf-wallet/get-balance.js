import ConnectDB from "@/utils/connect_db";
import UFpoints from "@/models/ufpoints"
import mongoose from "mongoose";
import StandardApi from "@/middlewares/standard_api";

const GetUFBalance = async (req, res) => StandardApi(req, res, {}, async () => {
    const { user_id, card_number } = req.query
    if (!mongoose.Types.ObjectId(user_id) || card_number.length < 18) return res.status(403).json({ success: false, msg: "Valid user id and card number are required. Query parameters: user_id, card_number" })
    await ConnectDB()

    const pointsDocs = await UFpoints.find({ user_id, card_number })
    const totalPoints = pointsDocs.reduce((prevTotal, currentObj) => { return prevTotal + currentObj.points }, 0)

    res.status(200).json({
        success: true,
        msg: '',
        balance: totalPoints,
        worth: totalPoints * parseFloat(process.env.NEXT_PUBLIC_UF_POINT_RATE)
    })
})
export default GetUFBalance