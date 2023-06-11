import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import Newsletter from "@/models/newsletter"
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// Only accessable by Admin 
const Signup = async (req, res) => {
    try {
        if (req.method === 'POST') {

            await ConnectDB()
            if (req.query.auth && req.query.auth === 'OAuth') {
                let user = await User.findOne({ "email": req.body.email })
                if (user) return res.status(400).json({ success: false, msg: "A user with this Email already exists" })
                user = await User.create(req.body)
                const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                return res.status(200).json({
                    success: true,
                    msg: "You are Resgistered successfully !",
                    payload
                })
            }
            else {
                let user = await User.findOne({ "email": req.body.email })
                if (user) return res.status(400).json({ success: false, msg: "A user with this Email already exists" })
                user = await User.findOne({ "username": req.body.username })
                if (user) return res.status(400).json({ success: false, msg: "A user with this Username already exists" })
                user = await User.create({ ...req.body, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString() })
                const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
                res.status(200).json({
                    success: true,
                    msg: "You're Resgistered successfully !",
                    payload
                })
                const userLetter = await Newsletter.findOne({ email: req.body.email, user: "guest" })
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
export default Signup