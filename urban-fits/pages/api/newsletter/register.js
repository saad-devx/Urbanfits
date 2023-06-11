import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import Newsletter from "@/models/newsletter"
import newsletter_confirm_template from "@/email templates/newsletter_confirm"
import sendEmail from "@/utils/sendEmail"

const CreateNewsletter = async (req, res) => {
    try {
        if (req.method === 'POST') {
            console.log(req.body)
            await ConnectDB()
            const id = req.body.user
            const returnIfSubscribed = async (email) => {
                let letter = await Newsletter.findOne({ email: email })
                if (letter) return res.status(400).json({ success: false, msg: "This email has already subscribed our Newsletter" })
            }
            const createLetter = async (values) => {
                const letter = await Newsletter.create(values)
                return res.status(200).json({
                    success: true,
                    data: letter,
                    msg: "You have successfully subscribed to our newsletter!"
                })
            }
            const sendSubConfirmation = async (name, interests) => {
                const template = newsletter_confirm_template(name, interests)
                await sendEmail({ to: req.body.email, subject: "Newsletter Subscription Confirmation" }, template)
            }

            if (!id) {
                await returnIfSubscribed(req.body.email)
                await createLetter(req.body)
                return await sendSubConfirmation(null, req.body.interests)
            }

            if (id) {
                let user = await User.findById(req.body.user)
                if (!user) return res.status(404).json({ success: false, msg: "User not found" })
                await returnIfSubscribed(req.body.email)
                await createLetter(req.body)
                return await sendSubConfirmation(user.firstname, req.body.interests)
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