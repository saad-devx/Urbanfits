import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import verifyEmail from "@/email templates/verify_email"
import sendEmail from "@/utils/sendEmail"
const jwt = require("jsonwebtoken")

// Only accessable by Admin 
const Signup = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await ConnectDB()
            if (req.query.auth && req.query.auth === 'OAuth') {
                let user = await User.findOne().or([{ email: req.body.email }, { username: req.body.username }])
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
                let user = await User.findOne().or([{ email: req.body.email }, { username: req.body.username }])
                if (user) return res.status(400).json({ success: false, msg: "This Email or Username already in use." })
                if (!req.body.accept_policies) return res.status(400).json({ success: false, msg: "A user can't register without accepting our policies and terms of use." })
                const token = jwt.sign({ ...req.body }, process.env.SECRET_KEY, { expiresIn: '10m' })
                const template = verifyEmail(req.body.email, token)
                let info = await sendEmail({ to: req.body.email, subject: "Email Verification" }, template)
                console.log(info)
                res.status(200).json({
                    success: true,
                    msg: `Verification Email sent to ${req.body.email}`,
                    payload: info
                })
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
export default Signup