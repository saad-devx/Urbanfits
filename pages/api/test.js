import axios from "axios";
import { sendAPIEmail } from "@/utils/sendEmail";
import verifyEmail from "@/email templates/verify_email";

const TestApiHandler = async (req, res) => {

    const template = verifyEmail("123456")
    sendAPIEmail("faizandevp@gmail.com", "Verify your email for registration on Urban Fits", template)

    res.status(200).json({
        success: true,
        msg: "The work's done!"
    })
}
export default TestApiHandler