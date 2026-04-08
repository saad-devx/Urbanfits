import { createTransport } from "nodemailer";
import axios from "axios";
import { getAuthHeader } from "./cyphers";

const sendEmail = async (options, template) => {
    try {
        const transport = createTransport({
            host: process.env.NEXT_PUBLIC_SMTP_HOST,
            port: 587,
            auth: {
                user: process.env.NEXT_PUBLIC_SMTP_USER,
                pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
            },
            options: {
                priority: "high",
                connectionTimeout: 20000,
            }
            // tls: {
            //     rejectUnauthorized: false
            // }
        });
        const message = {
            from: `"${options.senderName ? options.senderName : "Urban Fits"}" <${options.from ? options.from : process.env.NEXT_PUBLIC_SMTP_SENDER_EMAIL}>`,
            to: options.to,
            replyTo: options.from ? options.from : process.env.NEXT_PUBLIC_SMTP_SENDER_EMAIL,
            text: "Urban Fits",
            subject: options.subject,
            html: template
        };

        let info = await transport.sendMail(message);
        console.log(info)
        return info
    } catch (error) { console.log(error); return error }
}

export const sendAPIEmail = async (to, subject, template) => {
    try {
        axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/send-email`, { to, subject, template }, getAuthHeader());
    } catch (error) { console.log(error) }
}

export default sendEmail