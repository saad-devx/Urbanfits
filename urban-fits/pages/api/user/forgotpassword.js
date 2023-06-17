import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const jwt = require("jsonwebtoken")
import sendEmail from "@/utils/sendEmail"
import resetPassTemplate from "@/email templates/resetpass_template"

const forgotPassword = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await ConnectDB()
            let user = await User.findOne().or([{ email: req.body.email }, { username: req.body.email }])
            if (!user) return res.status(404).json({ success: false, msg: "You don't have an account with this Email or Username!" })
            console.log(user.register_provider)
            if (user.register_provider != "urbanfits") return res.status(404).json({ success: false, msg: "This email's either linked with Google or Apple" })
            const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '5m' })

            let template = resetPassTemplate(user.firstname, token)
            let info = await sendEmail({ to: user.email, subject: "Reset Password" }, template)
            res.json({
                success: true,
                msg: "Your Email has been verified, Check your Mail Box",
                resetPassToken: true
            })
        }
        else {
            res.status(400).json({ success: false, msg: "bad request, you are using wrong request method!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error occurred, pleae try again later" })
    }
}
export default forgotPassword