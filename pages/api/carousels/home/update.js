import ConnectDB from "@/utils/connect_db";
import HomeCarousel from "@/models/home_carousel";
import StandardApi from "@/middlewares/standard_api";

const UpdateHomeCarousel = async (req, res) => StandardApi(req, res, { verify_admin: true }, async () => {
    const { slides } = req.body;
    if (!slides.length) return res.status(400).json({ success: false, msg: "The slides array can't be empty." });

    await ConnectDB();
    const carousel = await HomeCarousel.findOneAndUpdate({}, req.body, { upsert: true, lean: true, new: true }).lean();
    res.status(200).json({
        success: true,
        msg: "",
        carousel
    })
})
export default UpdateHomeCarousel;