import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const jwt = require("jsonwebtoken")

const ResetPassword = async (req, res) => {
    try {

        if (req.method === 'PUT') {
            await ConnectDB()
            // let user = await User.findOne({ email: req.body.email })
            // if (!user) user = await User.findOne({ username: req.body.email }) //so that user can put the username or email in the same field and api should verify from both ways
            // if (!user) return res.status(404).json({ success: false, msg: "You don't have an account with this email!" })
            res.status(200).json({ success: true, msg: "Forgotpassword api running successfully"})
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
export default ResetPassword