import ConnectDB from "@/utils/connect_db"
import Coupon from "@/models/coupon"
import User from "@/models/user";
import mongoose from "mongoose";
import CorsMiddleware from "@/utils/cors-config"
import { HashValue } from "@/utils/generatePassword";

// Only accessable by Admin 
const CreateCoupon = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'POST') {
            console.log(req.body)
            const { admin_id } = req.query
            if (!admin_id || !mongoose.Types.ObjectId.isValid(admin_id)) return res.status(403).json({ success: false, msg: "A valid admin id is required." })

            await ConnectDB()
            let user = await User.findById(admin_id)
            if (!user || user.role !== "administrator") return res.status(403).json({ success: false, msg: "The user with corresponding id must exist and should be administrator create categories" })

            const hashedCouponCode = HashValue(req.body.coupon_code)
            console.log(hashedCouponCode)

            let coupon = await Coupon.findOne().or([{ name: req.body.name }, { coupon_code: hashedCouponCode }])
            if (coupon) return res.status(400).json({ success: false, msg: "Coupon already exists with this name or code. Both should be unique." })


            coupon = await Coupon.create({ ...req.body, coupon_code: hashedCouponCode })
            res.status(200).json({
                success: true,
                msg: `Coupon created with id ${coupon._id} successfully.`
            })
        }
        else return res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error ocurred, please try later." })
    }
}

export default CreateCoupon