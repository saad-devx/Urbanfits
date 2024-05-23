import ConnectDB from "@/utils/connect_db"
import Addresses from "@/models/addresses"
import StandardApi from "@/middlewares/standard_api"

const UpdateAddress = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    await ConnectDB();
    const updatedAddress = await Addresses.findOneAndUpdate({ user_id: req.user._id }, req.body, { new: true, upsert: true, lean: true });
    return res.status(200).json({
        success: true,
        msg: "Your Address updated successfully",
        addresses: updatedAddress
    })
})
export default UpdateAddress