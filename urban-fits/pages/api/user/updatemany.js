import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"

const UpdateUser = async (req, res) => {
    try {
        if (req.method === 'PUT') {
            await ConnectDB()
            // updating the user profile
            const data = await User.updateMany({}, req.body)
            res.status(200).json({
                success: true,
                data,
                msg: `Users data has been updated successfully`,
            })
        }
        else {
            res.status(403).json({ success: false, msg: "Method no allowed, you are using wrong request method!" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default UpdateUser