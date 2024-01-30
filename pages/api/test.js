import { sendNotification, sendAdminNotification } from "@/utils/send_notification"
import StandardApi from "@/middlewares/standard_api"
import ConnectDB from "@/utils/connect_db"

const TestApiHandler = (req, res) => StandardApi(req, res, {}, async () => {
    await ConnectDB()
    // const date = new Date()
    // await sendNotification("651ab014f10bff23784dd8e8", {
    //     category: "account",
    //     heading: "Test notification 2",
    //     type: "login",
    //     mini_msg: "This is a test notification...",
    //     message: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`
    // }, { notify: true })

    await sendAdminNotification({
        category: "system",
        data: {
            title: "Notification limit check",
            msg: `Test notification to test the system limit.`,
            type: "info"
        }
    })

    res.status(200).json({
        success: true,
        msg: "Notification send sucessfully."
    })
})

export default TestApiHandler