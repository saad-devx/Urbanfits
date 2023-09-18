import ConnectDB from "@/utils/connect_db"
import GuestUser from "@/models/guest_user"

const RemoveGuestSesison = async (req, res) => {
    try {
        if (req.method === 'POST') {
            const { user_id } = req.query
            console.log(user_id, "Yes the remove session api is working fine!")
            // if (!user_id) return res.status(400).json({ success: false, msg: "User id is required. Query parameters: user_id" })
            // await ConnectDB()
            // await GuestUser.findByIdAndDelete(user_id)
            res.end("Session removed.")
        }
        else res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: PUT" })
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default RemoveGuestSesison