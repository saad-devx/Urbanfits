import { sendNotification, sendAdminNotification } from "@/utils/send_notification"
import StandardApi from "@/middlewares/standard_api"
import ConnectDB from "@/utils/connect_db"
import UAParser from "ua-parser-js";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const TestApiHandler = (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    const { credential } = req.body;
    const decoded = jwt.verify(credential, process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)
    console.log(decoded);
    // const uaString = req.headers['user-agent']
    // const parser = new UAParser(uaString)
    // console.log("Here is the user agent: ", parser.getBrowser())

    // const {'session-token': sessionToken} = cookie.parse(req.headers.cookie || '')
    // console.log("here is the session cookie: ", cookies["session-token"])

    // res.setHeader(
    //     'Set-Cookie',
    //     cookie.serialize('session-token', "a very scecure session token wich will only be accessible from the server... Hell Yeaahhh!", {
    //         httpOnly: true,
    //         secure: false,
    //         sameSite: false
    //     })
    // );

    // await ConnectDB()
    // const date = new Date()
    // await sendNotification("651ab014f10bff23784dd8e8", {
    //     category: "account",
    //     heading: "Test notification 2",
    //     type: "login",
    //     mini_msg: "This is a test notification...",
    //     message: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`
    // }, { notify: true })

    // await sendAdminNotification({
    //     category: "system",
    //     data: {
    //         title: "Notification limit check",
    //         msg: `Test notification to test the system limit.`,
    //         type: "info"
    //     }
    // })

    res.status(200).json({
        success: true,
        msg: "Notification send sucessfully.",
        decoded
        // uaString,
        // device: parser.getBrowser(),
        // os: parser.getOS(),
        // cookies
    })
})

export default TestApiHandler