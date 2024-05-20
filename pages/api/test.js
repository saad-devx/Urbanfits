// import ConnectDB from "@/utils/connect_db";
// import Category from "@/models/category";
import sendEmail from "@/utils/sendEmail";

const TestApiHandler = async (req, res) => {
    // await ConnectDB();

    sendEmail({ to: "binarshadsaad6@gmail.com", subject: "Testing email from Urban Fits." }, "<h1>This is a test email sent to you to test the new SMTP credentials.</h1>");

    res.status(200).json({
        success: true,
        msg: "The work's done!"
    })
}
export default TestApiHandler