import ConnectDB from "@/utils/connect_db";
import mongoose, { isValidObjectId } from "mongoose";
import Reviews from "@/models/reviews";
import StandardApi from "@/middlewares/standard_api"

const GetReviews = async (req, res) => StandardApi(req, res, {}, async () => {
    const { product_id } = req.query;
    if (!isValidObjectId(product_id)) return res.status(400).json({ success: false, msg: "Invalid product_id provided." })
    await ConnectDB();

    const LIMIT = 10;
    let totalReviews = await Reviews.countDocuments({ product_id });

    const totalPages = Math.ceil(totalReviews / LIMIT);
    const page = parseInt(req.query.page) || 1;
    const skipReviews = (page - 1) * LIMIT;
    const reviews = await Reviews.find({ product_id })
        .sort({ createdAt: -1 })
        .skip(skipReviews)
        .limit(LIMIT)
        .populate({ path: "user_id", select: "_id username email firstname lastname gender" })
        .lean();

    const sumResult = await Reviews.aggregate([
        { $match: { product_id: new mongoose.Types.ObjectId(product_id) } },
        { $group: { _id: null, totalRating: { $sum: '$rating' } } }
    ]);

    res.status(200).json({
        success: true,
        msg: "",
        reviews,
        total_pages: totalPages,
        total_reviews: totalReviews,
        current_page: page,
        limit: LIMIT,
        average_rating: sumResult[0].totalRating / totalReviews
    })
})
export default GetReviews;