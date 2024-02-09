import ConnectDB from "@/utils/connect_db";
import UFpoints from "@/models/ufpoints"
import StandardApi from "@/middlewares/standard_api";
import { getDateOfTimezone } from "@/utils/cyphers";

const GetUFBalance = async (req, res) => StandardApi(req, res, {}, async () => {
    const { card_number } = req.query;
    const user_id = req.user._id;
    if (card_number.length < 18) return res.status(403).json({ success: false, msg: "A valid user card number is required. Query parameters: card_number" })
    await ConnectDB()

    const currentDate = getDateOfTimezone(req.user.timezone);
    const pointsDocs = await UFpoints.find({
        user_id,
        card_number,
        $or: [
            { expirationDate: { $exists: false } },
            { expirationDate: { $gt: currentDate } }
        ]
    })
    const totalPoints = pointsDocs.reduce((prevTotal, currentObj) => { return prevTotal + currentObj.points }, 0)

    res.status(200).json({
        success: true,
        msg: '',
        balance: totalPoints,
        worth: totalPoints * parseFloat(process.env.NEXT_PUBLIC_UF_POINT_RATE)
    })
})
export default GetUFBalance