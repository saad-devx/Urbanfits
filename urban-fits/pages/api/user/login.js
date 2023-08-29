import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

const Login = async (req, res) => {
    try {
        if (req.method === 'POST') {
            console.log(req.body)
            await ConnectDB()
            if (req.query.auth === 'OAuth') {
                let user = await User.findOne({ email: req.body.email })
                if (!user) return res.status(404).json({ success: false, msg: "User not found, please Sign up" })
                if (user.register_provider !== req.body.register_provider) return res.status(404).json({ success: false, msg: `This account is associated with ${user.register_provider}` })
                const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                return res.status(200).json({
                    success: true,
                    msg: "You are Logged in successfully !",
                    payload
                })
            }
            else {
                let user = await User.findOne().or([{ email: req.body.email }, { username: req.body.email }])
                if (!user) return res.status(404).json({ success: false, msg: "User not found, please create an account" })
                if (user.register_provider !== req.body.register_provider) return res.status(404).json({ success: false, msg: `This account is associated with ${user.register_provider}` })
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
                if (req.body.password !== originalPassword) return res.status(404).json({ success: false, msg: "Your password is incorrect" })
                const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                res.status(200).json({
                    success: true,
                    msg: "You are Logged in successfully !",
                    payload
                })
            }
        }
        else return res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error occured, please try again later" })
    }
}
export default Login