import ConnectDB from "@/utils/connect_db"
import Newsletter from "@/models/newsletter"
import newsletter_confirm_template from "@/email templates/newsletter_confirm"
import sendEmail from "@/utils/sendEmail"
import StandardApi from "@/middlewares/standard_api"
import { SignJwt } from "@/utils/cyphers";

const CreateNewsletter = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    await ConnectDB()
    const { email } = req.body;

    const sendSubConfirmationViaEmail = async (interests) => {
        if (!req.body.email) return
        const template = newsletter_confirm_template(null, interests)
        await sendEmail({ to: req.body.email, subject: "Newsletter Subscription Confirmation" }, template)
    }

    let letter = await Newsletter.findOne({ email }).lean();
    if (letter) return res.status(409).json({ success: false, msg: "You have already subscribed our Newsletter" })

    letter = await Newsletter.findOneAndUpdate({ email }, {
        ...req.body,
        active_by_email: true
    }, { new: true, upsert: true, lean: true });
    sendSubConfirmationViaEmail(req.body.interests);

    return res.status(201).json({
        success: true,
        msg: "You have successfully subscribed to our newsletter!",
        payload: SignJwt(letter)
    })
})
export default CreateNewsletter