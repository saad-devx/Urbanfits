import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import Newsletter from "@/models/newsletter"
import newsletter_confirm_template from "@/email templates/newsletter_confirm"
import sendEmail from "@/utils/sendEmail"
import jwt from 'jsonwebtoken'
const mongoose = require('mongoose')

const CreateNewsletter = async (req, res) => {
    try {
        if (req.method === 'POST') {
            console.log(req.body)
            await ConnectDB()
            const id = req.body.user

            const returnIfSubscribed = async (body) => {
                console.log(body)
                const toFindObj = () => {
                    const { email, phone } = body
                    if (email) return { email }
                    if (phone) return { phone }
                }
                console.log(toFindObj())
                let letter = await Newsletter.findOne(toFindObj())
                if (letter) return res.status(400).json({ success: false, msg: "This email has already subscribed our Newsletter" })
            }
            const sendTokenRes = async (letter) => {
                const payload = jwt.sign({ ...letter }, process.env.SECRET_KEY)
                return res.status(200).json({
                    success: true,
                    msg: "You have successfully subscribed to our newsletter!",
                    payload
                })
            }
            const sendSubConfirmation = async (name, interests) => {
                if (!req.body.email) return
                const template = newsletter_confirm_template(name, interests)
                await sendEmail({ to: req.body.email, subject: "Newsletter Subscription Confirmation" }, template)
            }

            if (!id) {
                const { email, phone } = req.body
                await returnIfSubscribed(req.body)

                let letter;
                if (email) letter = await Newsletter.create({ ...req.body, active_by_email: true })
                if (phone) letter = await Newsletter.create({ ...req.body, active_by_phone: true })
                sendSubConfirmation(null, req.body.interests)
                return await sendTokenRes(letter)
            }

            if (id) {
                let user = await User.findById(req.body.user)
                if (!user) return res.status(404).json({ success: false, msg: "User not found" })
                await returnIfSubscribed(req.body)

                let letter = await Newsletter.findOne({ user: mongoose.Types.ObjectId(id) })
                if (letter) {
                    const { email, phone } = req.body
                    if (email) letter = await Newsletter.findByIdAndUpdate(letter._id, { ...req.body, active_by_email: true })
                    if (phone) letter = await Newsletter.findByIdAndUpdate(letter._id, { ...req.body, active_by_phone: true })
                }
                else letter = await Newsletter.create(req.body)

                sendSubConfirmation(user.firstname, req.body.interests)
                return await sendTokenRes(letter)
                // letter = await ( await Newsletter.create(req.body)).populate("user")
            }
        }
        else {
            res.status(405).json({ success: false, msg: "method not allowed, you are using wrong request method!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}

export default CreateNewsletter