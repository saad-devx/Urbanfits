import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import { CLIENT_STATIC_FILES_PATH } from "next/dist/shared/lib/constants";
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken")


const forgotPassword = async (req, res) => {
    try {

        if (req.method === 'POST') {
            await ConnectDB()
            // let user = await User.findOne({ email: req.body.email })
            // if (!user) user = await User.findOne({ username: req.body.email }) //because user can put the username or email in the same field and api should verify from both ways
            // if (!user) return res.status(404).json({ success: false, msg: "You don't have an account with this email!" })
            // const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '2m' })

            // create a nodemailer transport object
            // const transport = nodemailer.createTransport({
            //     host: "smtp.mailgun.org",
            //     port: 587,
            //     auth: {
            //         user: "postmaster@sandboxbc29305ee82541a796810e1c2d98a909.mailgun.org",
            //         pass: "5b95478b2a44a24bab25ad1f7156eafd-52d193a0-daa82d90"
            //     }
            // });

            // // create email message object
            // const message = {
            //     from: 'binarshadsaad6@gmail.com',
            //     to: 'saad19rsf@gmail.com',
            //     text: "hellow this is a text email body to check the email service",
            //     subject: 'You subscribed our Newsletter',
            //     html: `<html><body><h1>Fitte Moooo!</h1><p>Dear valuable Jheengu this email is to notify you that you have successfully recieved the 'Fitte Moo' reward for literally just existing at this time of morning.</p></body></html>`
            // };

            // // send email using nodemailer
            // let info = await transport.sendMail(message);
            // console.log(info)
            // res.json({ success: true, info })

            // USING GMAIL
            const transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                // port: 587,
                auth: {
                    user: "dark.reaper1911@gmail.com",
                    pass: "19114666"
                }
            });

            // create email message object
            const message = {
                from: 'dark.reaper1911@gmail.com',
                to: 'saad19rsf@gmail.com',
                text: "hellow this is a text email body to check the email service",
                subject: 'You subscribed our Newsletter',
                html: `<html><body><h1>Fitte Moooo!</h1><p>Dear valuable Jheengu this email is to notify you that you have successfully recieved the 'Fitte Moo' reward for literally just existing at this time of morning.</p></body></html>`
            };

            // send email using nodemailer
            let info = await transport.sendMail(message);
            console.log(info)
            res.json({ success: true, info })

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