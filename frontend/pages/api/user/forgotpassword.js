import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")


const forgotPassword = async (req, res) => {
    if (req.method === 'POST') {
        await ConnectDB()
        let user = await User.findOne({ email: req.body.email })
        if (!user) user = await User.findOne({ username: req.body.email }) //because user can put the username or email in the same field and api should verify from both ways
        if (!user) return res.status(404).json({ success: false, msg: "You don't have an account with this email!" })
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '2m' })
        const transporter = nodemailer.createTransport({
            service: 'MSG91',
            auth: {
                user: 'your_email_address',
                pass: 'your_email_password'
            }
        });

        const mailOptions = {
            from: 'sender_email_address',
            to: 'receiver_email_address',
            subject: 'Reset your password',
            html: '<p>Click <a href="reset_password_page?token=unique_token">here</a> to reset your password.</p>'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })


        // const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        // const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
        // if (req.body.password !== originalPassword) return res.status(404).json({ success: false, msg: "Your password is incorrect" })
        // const payload = jwt.sign({username: user.username, email: user.email, phone:user.phone }, process.env.SECRET_KEY)
        // res.status(200).json({
        //     success: true,
        //     msg: "You are Logged in successfully !",
        //     payload
        // })
    }
    else {
        res.status(400).json({ success: false, msg: "bad request, you are using wrong request method!" })
    }
}

export default forgotPassword