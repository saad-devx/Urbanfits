import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const CryptoJS = require("crypto-js")
import jwt from 'jsonwebtoken';

const ResetPassword = async (req, res) => {
    try {
        if (req.method === 'PUT') {
            const { token } = req.body
            if (!token) return res.status(400).json({ success: false, msg: "Token is missing" })
            console.log(token)
            const { email } = jwt.decode(token)
            console.log(email)
            if (!email) return res.status(400).json({ success: false, msg: "The user email is required for the password reset" })
            await ConnectDB()

            let user = await User.findOne({ email: email })
            if (!user) return res.status(404).json({ success: false, msg: "You don't have an account with this Email!" })

            const newPassword = CryptoJS.AES.encrypt(req.body.confirm_password, process.env.SECRET_KEY).toString()
            await User.findOneAndUpdate({ email: email }, { password: newPassword })
            res.status(200).json({ success: true, resetPassword: true, msg: "Your password has been updated!" })
        }
        else return res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error occurred, pleae try again later" })
    }
}
export default ResetPassword