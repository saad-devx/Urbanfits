import { sendAPIEmail } from "@/utils/sendEmail";
import resetPass from "@/email templates/resetpass_template";

const TestApiHandler = async (req, res) => {

    const template = resetPass("Whatever", "123456")
    sendAPIEmail("faizandevp@gmail.com", "Verify your email for registration on Urban Fits", template)

    res.status(200).json({
        success: true,
        msg: "The work's done!"
    })
}
export default TestApiHandler