import ConnectDB from "@/utils/connect_db";
import { isValidObjectId } from "mongoose";
import Reviews from "@/models/reviews";
import { sendNotification } from "@/utils/send_notification";
import StandardApi from "@/middlewares/standard_api"

const AddReview = async (req, res) => StandardApi(req, res, { method: "POST" }, async () => {
    const { product_id, rating, review, images } = req.body;
    const user_id = req.user._id;

    if (!isValidObjectId(product_id) || !rating) return res.status(400).json({
        success: false,
        msg: "Invalid arguments. product_id, user_id and rating are required."
    })
    if (rating < 1 || rating > 5) return res.status(400).json({
        success: false,
        msg: "Rating must be a non decimal integer between 1 and 5"
    })
    if (review && (typeof review !== "string" || review.length > 500)) return res.status(400).json({
        success: false,
        msg: "`reviews` must be a valid string containing maximum of 500 characters."
    })
    if (images?.length && images.find(img => typeof img !== "string")) return res.status(400).json({
        success: false,
        msg: "`images` must be an array containing of only string URLs."
    })
    await ConnectDB();

    const newReview = await Reviews.findOneAndUpdate({ user_id }, req.body, { upsert: true, new: true, lean: true });

    sendNotification(user_id, {
        category: "primary",
        heading: "You added a review",
        mini_msg: `You added a rating of ${rating} to a product.`,
        message: `You added a rating of ${rating} to a product.`
    }, { notify: true, notifySilently: true })

    res.status(200).json({
        success: true,
        msg: "Thanks for your review! It would help others to know about the product.",
        review: newReview
    })
})
export default AddReview;