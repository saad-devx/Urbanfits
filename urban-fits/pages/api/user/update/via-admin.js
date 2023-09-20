import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import CorsMiddleware from "@/utils/cors-config"

const UpdateUser = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'PUT') {
            const { admin_id, user_id } = req.query
            if (!admin_id || !user_id) return res.status(403).json({ success: false, msg: "User and Admin id is required. Query parameters: user_id, admin_id" })
            await ConnectDB()
            let admin = await User.findById(admin_id)
            if (!admin || admin.role !== "administrator") return res.status(403).json({ success: false, msg: "Only admin users can access and perform operations." })

            let user = await User.findById(user_id)
            if (!user) return res.status(404).json({ success: false, msg: "User not found" })
            if (req.body.email && req.body.email.includes("@")) {
                user = await User.findOne({ email: req.body.email })
                if (user) delete req.body.email
            } else delete req.body.email

            delete req.body.username
            delete req.body.password
            delete req.body.two_fa_secret
            user = await User.findByIdAndUpdate(user_id, req.body, { new: true })
            res.status(200).json({
                success: true,
                msg: `${user.username}'s data has been updated successfully`,
                user
            })
        }
        else res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: PUT" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error occurred, please try again later." })
    }
}

export default UpdateUser