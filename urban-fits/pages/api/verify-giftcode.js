import ConnectDB from "@/utils/connect_db"
import Giftcard from "@/models/giftcard"

const VerifyGiftcode = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await ConnectDB()
            const { gift_code } = req.query
            if (!gift_code || gift_code.length < 8 || gift_code.length > 10) return res.status(400).json({ success: false, msg: "Invalid Giftcode. Query parameters: gift_code (must be of length 9 - 10)" })
            const gift_card = await Giftcard.findOne({ gift_code })
            if (!gift_card) return res.status(404).json({ success: false, msg: "Invalid gift code." })

            res.status(200).json({
                success: true,
                gift_card
            })
        }
        else res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default VerifyGiftcode