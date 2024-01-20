import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import UFpoints from "@/models/ufpoints"
import StandardApi from "@/middlewares/standard_api";

const AddUFpoints = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { card_number, user_id, points_to_deduct } = req.body
    if (!card_number || !mongoose.Types.ObjectId.isValid(user_id) || !points_to_deduct) return res.status(403).json({ success: false, msg: "Invalid or incomplete arguments. Required Body parameters: card_number, user_id, points_to_deduct" })
    await ConnectDB()
    const pointsDocs = await UFpoints.find({ user_id, card_number })

    let deductedPoints = 0;

    for (const pointsDoc of pointsDocs) {
        const remainingPoints = pointsDoc.points - deductedPoints;

        if (remainingPoints >= points_to_deduct) {
            // Deduct points from this document and update it
            pointsDoc.points -= points_to_deduct;
            await pointsDoc.save();

            deductedPoints += points_to_deduct;
            break;
        } else if (remainingPoints > 0) {
            // Deduct remaining points from this document and update it
            pointsDoc.points -= remainingPoints;
            await pointsDoc.save();

            deductedPoints += remainingPoints;
        } else await pointsDoc.remove();
    }

    res.status(200).json({
        success: true,
        msg: `Points deducted successfully.`,
        deductedPoints
    })
})
export default AddUFpoints