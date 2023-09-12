import OTP from "@/models/otp";
import User from "@/models/user";
import ConnectDB from "@/utils/connect_db";
const jwt = require("jsonwebtoken")

const AuthOtpAndChangeEmail = async (req, res) => {
    try {
        if (req.method === 'PUT') {
            const { otp_id, otp, } = req.body;
            if (!otp_id || !otp) return res.status(400).json({ success: false, msg: "All valid parameters required. Body Parameters: otp_id, otp" })
            await ConnectDB()
            const dbOtp = await OTP.findById(otp_id)
            if (!dbOtp) return res.status(401).json({ success: false, msg: "OTP has expired." })
            if (otp !== dbOtp.otp) return res.status(401).json({ success: false, msg: "Incorrect OTP" })
            const updatedUser = await User.findByIdAndUpdate(dbOtp.user_id, {
                email: dbOtp.new_email
            }, { new: true })

            const payload = jwt.sign({ ...updatedUser }, process.env.SECRET_KEY)
            res.status(200).json({
                success: true,
                msg: "Your email has been updated!",
                payload
            })
        }
        else res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: PUT" })
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error occurred. Please retry later.")
    }
}

export default AuthOtpAndChangeEmail