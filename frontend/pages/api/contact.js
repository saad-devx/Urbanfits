import ConnectDB from "@/utils/connect_db"

const Contact = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await ConnectDB()
            let mail = req.body
            res.status(200).json({
                success: true,
                msg: "Your mail sent successfully !",
                mail
            })
        }
        else {
            res.status(400).json({ success: false, msg: "bad request, you are using wrong request method!" })
        }
    }
    catch (error) {
        res.status(400).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default Contact