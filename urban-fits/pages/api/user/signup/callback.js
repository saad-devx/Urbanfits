import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import OTP from "@/models/otp"
import Newsletter from "@/models/newsletter"
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

const SignupCallback = async (req, res) => {
    try {
        if (req.method === 'POST') {
            const { otp_id, otp } = req.body
            if (!otp_id || otp_id.length < 18) return res.status(401).json({
                success: false,
                msg: "All parameters are required. Body Parameter: otp_id"
            })
            await ConnectDB()

            const dbOtp = await OTP.findById(otp_id)
            if (!dbOtp) return res.status(401).json({ success: false, msg: "The OTP has expired, please try again." })
            if (dbOtp.otp !== otp) return res.status(401).json({ success: false, msg: "The OTP is incorrect." })

            let credentials = dbOtp.new_user
            if (dbOtp) {
                let user = await User.findOne().or([{ email: credentials.email }, { username: credentials.username }])
                if (user) return res.status(400).json({ success: false, msg: "This Email or Username already in use." })
                user = await User.create({ ...credentials, password: CryptoJS.AES.encrypt(credentials.password, process.env.SECRET_KEY).toString() })
                const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                res.status(200).json({
                    success: true,
                    msg: "You're Resgistered successfully !",
                    payload
                })
                const userLetter = await Newsletter.findOne({ email: credentials.email, user: "guest" })
                if (userLetter) return userLetter.update({ active: true, user: user._id })
            }
        }
        else {
            res.status(400).json({ success: false, msg: "bad request, you are using wrong request method!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error occured, please try again later" })
    }
}
export default SignupCallback