import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import OTP from "@/models/otp"
import verifyEmail from "@/email templates/verify_email"
import sendEmail from "@/utils/sendEmail"
const jwt = require("jsonwebtoken")
import { generateRandomInt } from "@/utils/generatePassword";

// Only accessable by Admin 
const Signup = async (req, res) => {
    try {
        const { username, email, phone_prefix, phone_number, password } = req.body;
        if (!username || !email || !phone_prefix || !phone_number || !password) return res.status(400).json({ success: false, msg: "All valid parameters required. Body Parameters: username, email, phone_prefix, phone_number, password, accept_policy" })
        if (req.method === 'POST') {
            await ConnectDB()
            if (req.query.auth && req.query.auth === 'OAuth') {
                let user = await User.findOne().or([{ email }, { username }])
                if (user) return res.status(400).json({ success: false, msg: "This Email or Username already in use." })
                user = await User.create(req.body)
                const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                return res.status(200).json({
                    success: true,
                    msg: "You are Resgistered successfully !",
                    payload
                })
            }
            else {
                let user = await User.findOne().or([{ email }, { username }])
                if (user) return res.status(400).json({ success: false, msg: "This Email or Username already in use." })
                if (!req.body.accept_policies) return res.status(400).json({ success: false, msg: "A user can't register without accepting our policies and terms of use." })
                // const token = jwt.sign({ ...req.body }, process.env.SECRET_KEY, { expiresIn: '10m' })

                let dbOtp = await OTP.findOne({ email })
                if (dbOtp) return res.status(401).json({ success: false, msg: "You already have 'registration' session, try after 5 minutes." })
                if (!dbOtp) {
                    let otp = generateRandomInt(10001, 999999)
                    dbOtp = await OTP.create({
                        email,
                        new_user: req.body,
                        otp,
                        expireAt: Date.now()
                    })
                    const template = verifyEmail(otp)
                    await sendEmail({ to: req.body.email, subject: "Verify your email for registration on Urban Fits" }, template)
                    res.status(200).json({
                        success: true,
                        msg: `Verification Email sent to ${email}`,
                        redirect_url: `/auth/signup/verify-otp?otp_id=${dbOtp._id}`
                    })
                }
            }
        }
        else res.status(400).json({ success: false, msg: "bad request, you are using wrong request method!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error occured, please try again later" })
    }
}
export default Signup