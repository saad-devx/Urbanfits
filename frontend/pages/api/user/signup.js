import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const CryptoJS = require("crypto-js");

// Only accessable by Admin 
const Signup = async (req, res) => {
    if (req.method === 'POST') {
        await ConnectDB()
        let user = await User.findOne({"email": req.body.email})
        if(user) return res.status(400).json({ success: false, msg: "A user with this Email or Username already exists" })
        user = await User.findOne({"username": req.body.username})
        if(user) return res.status(400).json({ success: false, msg: "A user with this Email or Username already exists" })
        user = await User.create({...req.body, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()})
        res.status(200).json({
            success: true,
            msg: "You're Resgistered successfully !",
            user
        })
    }
    else {
        res.status(400).json({ error: "bad request, you are using wrong request method!" })
    }
}

export default Signup