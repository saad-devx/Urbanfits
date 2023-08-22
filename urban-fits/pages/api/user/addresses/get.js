import ConnectDB from "@/utils/connect_db"
import Addresses from "@/models/addresses"
import User from "@/models/user"
const jwt = require("jsonwebtoken")

const GetAddress = async (req, res) => {
    try {
        if (req.method === 'GET') {
            const { user_id } = req.query
            if (!user_id) return res.status(400).json({ success: false, msg: "A valid user id required. Parameter: user_id" })
            await ConnectDB()

            let user = await User.findById(user_id)
            if (!user) return res.status(404).json({ success: false, msg: "User not found" })
            let addresses = await Addresses.findOne({ user_id })
            if (!addresses) return res.status(404).json({ success: false, msg: "No address record found for this user." })
            const payload = jwt.sign({ ...addresses }, process.env.SECRET_KEY)
            res.status(200).json({
                success: true,
                payload
            })
        }
        else {
            res.status(405).json({ success: false, msg: "Only GET method allowed." })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error occurred, please try again later." })
    }
}
export default GetAddress