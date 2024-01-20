import OTP from "@/models/otp";
import User from "@/models/user";
import ConnectDB from "@/utils/connect_db";
import jwt from "jsonwebtoken"
import StandardApi from "@/middlewares/standard_api";

const AuthOtpAndChangeEmail = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { otp_id, otp, } = req.body;
    if (!otp_id || !otp) return res.status(400).json({ success: false, msg: "All valid parameters required. Body Parameters: otp_id, otp" })
    await ConnectDB()
    const dbOtp = await OTP.findById(otp_id)
    if (!dbOtp) return res.status(401).json({ success: false, msg: "OTP has expired." })
    if (otp !== dbOtp.otp) return res.status(401).json({ success: false, msg: "Incorrect OTP" })
    const updatedUser = await User.findByIdAndUpdate(dbOtp.user_id, {
        email: dbOtp.new_email
    }, { new: true })

    const payload = jwt.sign({ ...updatedUser }, process.env.NEXT_PUBLIC_SECRET_KEY)
    res.status(200).json({
        success: true,
        msg: "Your email has been updated!",
        payload
    })
})
export default AuthOtpAndChangeEmail