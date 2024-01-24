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

    // await sendAdminNotification({
    //     category: "system",
    //     data: {
    //         title: "Notification Intro",
    //         msg: `This is "info" type of notification. Read the Description`,
    //         description: "All notifications are setup is done, everytime any important event such as A user contacts you by email, an order being placed etc. And if any type of error occurs in Urban Fits server, the system will automatically send a notification here telling you what was the error.",
    //         type: "info"
    //     }
    // })
    console.log("Yo BROO here is the sessio valid request body: ", req.body)

    res.status(200).json({
        success: true,
        msg: "Notification send sucessfully."
    })
})

export default TestApiHandler