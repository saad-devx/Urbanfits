import ConnectDB from "@/utils/connect_db";
import { sendAdminNotification } from "@/utils/send_notification";

const TestApiHandler = async (req, res) => {
    await ConnectDB();

    sendAdminNotification({
        category: "system",
        data: {
            title: "System info",
            msg: `this is notification is triggered for testing.`,
            description: "Some kind of description here......",
            type: "info"
        }
    })

    res.status(200).json({
        success: true,
        msg: "Yoo the work's done"
    })
}
export default TestApiHandler