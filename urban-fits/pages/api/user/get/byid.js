import ConnectDB from "@/utils/connect_db"
import User from "@/models/user";
import mongoose from "mongoose";
import CorsMiddleware from "@/utils/cors-config"

const getManyUsers = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'GET') {
            const { user_id, user_to_get } = req.query
            if (!user_id || !user_to_get || !mongoose.Types.ObjectId(user_id)) return res.status(400).json({ success: false, msg: "A valid user id required. Query parameters: user_id, user_to_get" })
            await ConnectDB()
            let user = await User.findById(user_id)
            if (!user || user.role !== "administrator") return res.status(400).json({ success: false, msg: "The user with corresponding id must exist and should be administrator to access this data." })

            const userToGet = await User.findById(user_to_get)
            if (!userToGet) return res.status(404).json({ success: false, msg: "The user with corresponding id does not exist." })
            delete userToGet.password

            res.status(200).json({
                success: true,
                user: userToGet
            })
        }
        else return res.status(405).json({ success: false, msg: "Method not Allowed, Allowed methods: GET" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error occurred, please try again later." })
    }
}
export default getManyUsers