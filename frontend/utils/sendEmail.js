const nodemailer = require('nodemailer');

const sendEmail = async (recipient, subject, template) => {
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 25,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    const message = {
        from: `"Urban Fits" <${process.env.SMTP_SENDER_EMAIL}>`,
        to: recipient,
        replyTo: process.env.SMTP_SENDER_EMAIL,
        text: "Urban Fits",
        subject: subject,
        html: template
    };

    let info = await transport.sendMail(message);
    console.log(info)
    return info
}
export default sendEmail