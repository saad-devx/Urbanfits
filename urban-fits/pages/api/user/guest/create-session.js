import ConnectDB from "@/utils/connect_db"
import GuestUser from "@/models/guest_user"

const RemoveGuestSesison = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await ConnectDB()
            const user = await GuestUser.create({})
            console.log(user)
            res.status(200).json({
                success: true,
                msg: "Guest created successfully",
                user
            })
        } else res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: PUT" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ success: false, msg: "Internal server error occurred, please try later." })
    }
}

export default RemoveGuestSesison