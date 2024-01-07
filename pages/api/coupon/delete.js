import ConnectDB from "@/utils/connect_db"
import Coupon from "@/models/coupon"
import User from "@/models/user";
import CorsMiddleware from "@/utils/cors-config"
import verifyAdminToken from "@/utils/verify_admin";
import mongoose from "mongoose"

// Only accessable by Admin 
const DeleteCoupon = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'DELETE') {
            const admin_id = verifyAdminToken(req, res)
            const { coupon_id } = req.query;
            if (!mongoose.Types.ObjectId.isValid(coupon_id)) return res.status(403).json({ success: false, msg: "coupon_id are required fields" })

            await ConnectDB()
            let user = await User.findById(admin_id)
            if (!user || user.role !== "administrator") return res.status(403).json({ success: false, msg: "The user with corresponding id must exist and should be administrator create categories" })

            await Coupon.findByIdAndDelete(coupon_id)
            res.status(200).json({
                success: true,
                msg: `Coupon with id ${coupon_id} deleted successfully.`
            })
        }
        else return res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error ocurred, please try later." })
    }
}

export default DeleteCoupon