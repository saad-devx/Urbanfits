import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import UFpoints from "@/models/ufpoints"
import OTP from "@/models/otp"
import verifyEmail from "@/email templates/verify_email"
import sendEmail from "@/utils/sendEmail"
import createUFcard from "@/utils/create-ufcard"
import { generateRandomInt } from "@/utils/generatePassword";
import { sendNotification, sendAdminNotification } from "@/utils/send_notification"
import jwt from "jsonwebtoken";
import axios from "axios"
import StandardApi from "@/middlewares/standard_api"

const Signup = async (req, res) => StandardApi(req, res, { method: "POST" }, async () => {
    const { username, email, phone_prefix, phone_number, password } = req.body;
    await ConnectDB()
    if (req.query.auth && req.query.auth === 'google') {
        if (!username || !email) return res.status(400).json({ success: false, msg: "All valid parameters required. Body Parameters: username, email, phone_prefix, phone_number, password, accept_policy" })
        let user = await User.findOne().or([{ email }, { username }])
        if (user) return res.status(400).json({ success: false, msg: "This Email or Username already in use." })
        const ufCardData = await createUFcard()
        user = await User.create({
            ...req.body,
            uf_wallet: ufCardData
        })
        await UFpoints.create({
            user_id: user._id,
            card_number: user.uf_wallet.card_number,
            points: 500,
            source: "signup"
        })
        axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/tasks/create-tasks-record?user_id=${user._id}`)
        const payload = jwt.sign({ ...user }, process.env.NEXT_PUBLIC_SECRET_KEY)
        await sendNotification(user._id, {
            category: "reward",
            heading: "Signup Bonus",
            type: "signup",
            mini_msg: `Congratulations, You won 500 UF Points as a signup bonus!`,
            message: `Congratulations ! You're a part of Urban Fits now. You got 500 UF Points as a signup bonus, Happy Shopping!`
        }, { notify: true })
        res.status(200).json({
            success: true,
            msg: "You are Resgistered successfully !",
            payload
        })
        sendAdminNotification({
            category: "user",
            data: {
                title: "New Signup",
                msg: `A new user ${user.username} just signed up.`,
                href: "/user/userlist",
                type: "success"
            }
        })
    }
    else {
        if (!username || !email || !phone_prefix || !phone_number || !password) return res.status(400).json({ success: false, msg: "All valid parameters required. Body Parameters: username, email, phone_prefix, phone_number, password, accept_policies" })
        let user = await User.findOne().or([{ email }, { username }])
        if (user) return res.status(400).json({ success: false, msg: "This Email or Username already in use." })
        if (!req.body.accept_policies) return res.status(403).json({ success: false, msg: "A user can't register without accepting our policies and terms of use." })

        let dbOtp = await OTP.findOne({ email })
        if (dbOtp) return res.status(401).json({ success: false, msg: "You already have 'registration' session, try after 5 minutes." })
        if (!dbOtp) {
            let otp = generateRandomInt(10001, 999999)
            dbOtp = await OTP.create({
                email,
                new_user: req.body,
                otp,
                expireAt: Date.now()
            })
            const template = verifyEmail(otp)
            await sendEmail({ to: req.body.email, subject: "Verify your email for registration on Urban Fits" }, template)
            res.status(200).json({
                success: true,
                otp_id: dbOtp._id,
                msg: `Verification Email sent to ${email}`,
                redirect_url: `/auth/signup/verify-otp?otp_id=${dbOtp._id}`
            })
        }
    }
})
export default Signup