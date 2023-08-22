import ConnectDB from "@/utils/connect_db"
import sendSMS from "@/utils/sendSMS"

const SendOtp = async (req, res) => {
    try {
        if (req.method === 'PUT') {
            // await ConnectDB()
            const { msg, to } = req.body
            const response = await sendSMS(to, msg)
            res.status(200).json({
                success: true,
                response
            })
        }
        else {
            res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default SendOtp