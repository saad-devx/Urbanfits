import sendNotification from "@/utils/send_notification"

const TestApiHandler = async (req, res) => {
    try {
        if (req.method === 'POST') {

            const date = new Date()
            await sendNotification("651ab014f10bff23784dd8e8", {
                category: "account",
                heading: "Login",
                type: "login",
                mini_msg: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`,
                message: `You logged in to your Urban Fits account at ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()} ${date.getHours() + ":" + date.getMinutes()}`
            }, { notify: true, notifySilently: true })

            res.status(200).json({
                success: true,
                msg: "Notification send sucessfully."
            })
        }
        else res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default TestApiHandler