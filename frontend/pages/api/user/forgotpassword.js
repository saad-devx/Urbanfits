import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import { CLIENT_STATIC_FILES_PATH } from "next/dist/shared/lib/constants";
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken")


const forgotPassword = async (req, res) => {
    try {

        if (req.method === 'POST') {
            await ConnectDB()
            let user = await User.findOne({ email: req.body.email })
            if (!user) user = await User.findOne({ username: req.body.email }) //because user can put the username or email in the same field and api should verify from both ways
            if (!user) return res.status(404).json({ success: false, msg: "You don't have an account with this email!" })
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '2m' })

            // create a nodemailer transport object
            const transport = nodemailer.createTransport({
                host: "smtp-relay.sendinblue.com",
                port: 587,
                secure: false,
                auth: {
                    user: "binarshadsaad6@gmail.com",
                    pass: "rO2FdLIhB8RYjfg9",
                },
            });

            // create email message object
            const message = {
                from: 'dark_reaper6@outlook.com',
                to: "binarshadsaad6@gmail.com",
                subject: "Test Email from Sendinblue",
                text: "hellow this is a text email body to check the email service",
                html: "<p>hellow this is a text email body to check the email service</p>",
            };

            // send email using nodemailer
            transport.sendMail(message, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                    res.status(200).json({
                        success: true,
                        msg: "Email send successfully, maybe",
                        messageId: info.messageId
                    })
                }
            });

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