import ConnectDB from "@/utils/connect_db";
import Newsletter from "@/models/newsletter";
import { SignJwt } from "@/utils/cyphers";
import StandardApi from "@/middlewares/standard_api";

const getNewsletters = async (req, res) => StandardApi(req, res, {}, async () => {
    const { email } = req.user;
    if (!email) return res.status(400).json({ success: false, msg: "Invalid request, neither id nor email provided." })
    await ConnectDB()

    const letter = await Newsletter.findOne({ email }).lean();
    if (!letter) return res.status(404).json({ success: false, msg: "Newsletter not registered with this email" })
    return res.status(200).json({
        success: true,
        payload: SignJwt(letter),
        msg: "Newsletter registration found."
    })
})
export default getNewsletters