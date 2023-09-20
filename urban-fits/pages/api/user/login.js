import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import Notification from "@/models/notification"
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
import { pusherServer } from "@/utils/pusher"
import CorsMiddleware from "@/utils/cors-config"

const Login = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'POST') {
            const { email, password } = req.body
            await ConnectDB()
            if (!email) return res.status(400).json({ success: false, msg: 'All valid parameters are required. Body parameters: email' })
            if (req.query.auth === 'OAuth') {
                let user = await User.findOne({ email })
                if (!user) return res.status(404).json({ success: false, msg: "User not found, please Sign up" })
                if (user.register_provider !== req.body.register_provider) return res.status(404).json({ success: false, msg: `This account is associated with ${user.register_provider}` })
                if (user.two_fa_activation_date && user.two_fa_enabled) {
                    return res.status(200).json({
                        success: true,
                        msg: "",
                        redirect_url: `/auth/confirm-2fa-totp?user_id=${user._id}`
                    })
                }
                if (!user.two_fa_enabled) {
                    const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                    res.status(200).json({
                        success: true,
                        msg: "You are Logged in successfully !",
                        payload
                    })
                    pusherServer.trigger("admin-channel", "login", {
                        msg: `A user ${user.username} just logged in.`,
                        user_id: user._id
                    })
                    const userNotification = await Notification.findOneAndUpdate(
                        { user_id: user._id },
                        {
                            $push: {
                                notifications: {
                                    $each: [{
                                        category: "account",
                                        heading: "Login",
                                        type: "login",
                                        message: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`,
                                        timestamp: new Date()
                                    }],
                                    $position: 0,
                                    $slice: 20,
                                }
                            }
                        },
                        { upsert: true, new: true }
                    ); console.log(userNotification)
                }
            }
            else {
                if (!email || !password) return res.status(400).json({ success: false, msg: 'All valid parameters are required. Body parameters: email, password' })
                let user = await User.findOne().or([{ email }, { username: email }])
                if (!user) return res.status(404).json({ success: false, msg: "User not found, please create an account" })
                if (user.register_provider !== req.body.register_provider) return res.status(404).json({ success: false, msg: `This account is associated with ${user.register_provider}` })
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
                if (password !== originalPassword) return res.status(403).json({ success: false, msg: "Your password is incorrect" })
                if (user.two_fa_activation_date && user.two_fa_enabled) {
                    return res.json({
                        success: true,
                        msg: "",
                        redirect_url: `/auth/confirm-2fa-totp?user_id=${user._id}`,
                    })
                }
                if (!user.two_fa_enabled) {
                    const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                    res.status(200).json({
                        success: true,
                        msg: "You are Logged in successfully !",
                        payload
                    })
                    console.log("yeah i reached to pusher event")
                    pusherServer.trigger("admin-channel", "login", {
                        msg: `A user ${user.username} just logged in.`,
                        user_id: user._id
                    })
                    console.log("yeah i reached to the notification")
                    const date = new Date()
                    const userNotification = await Notification.findOneAndUpdate(
                        { user_id: user._id },
                        {
                            $push: {
                                notifications: {
                                    $each: [{
                                        category: "account",
                                        heading: "Login",
                                        type: "login",
                                        message: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`,
                                        timestamp: new Date()
                                    }],
                                    $position: 0,
                                    $slice: 20,
                                }
                            }
                        },
                        { upsert: true, new: true }
                    ); console.log(userNotification)
                }
            }
        }
        else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: POST" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error occurred, please try again later." })
    }
}
export default Login