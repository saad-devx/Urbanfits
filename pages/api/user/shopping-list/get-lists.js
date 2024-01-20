import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import Shoppinglist from "@/models/shoppinglist";
import StandardApi from "@/middlewares/standard_api";

const GetShoppinglists = async (req, res) => StandardApi(req, res, {}, async () => {
    const { user_id } = req.query
    if (!mongoose.Types.ObjectId(user_id)) return res.status(403).json({ success: false, msg: "Valid user id is required. Query parameters: user_id" })

    await ConnectDB()
    let shoppinglists = await Shoppinglist.find({ user_id })
    res.status(200).json({
        msg: `${shoppinglists.length} Shopping lists found.`,
        shoppinglists
    })
})
export default GetShoppinglists