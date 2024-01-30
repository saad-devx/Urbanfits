import ConnectDB from "@/utils/connect_db"
import StandardApi from "@/middlewares/standard_api";

// Only accessable by Admin 
const MongoChangeEventsHook = async (req, res) => StandardApi(req, res, { method: "POST" }, async () => {
    // if (!req.body.name || !req.body.coupon_code || !req.body.coupon_value) return res.status(403).json({ success: false, msg: "name, coupon_code and coupon_value are required fields" })
    // await ConnectDB()
    console.log("Here is the mongodb trigger function result: ", req.body)
    res.status(200).json({
        success: true
        // msg: `Coupon created with id ${coupon._id} successfully.`
    })
})
export default MongoChangeEventsHook