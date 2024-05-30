import ConnectDB from "@/utils/connect_db";
import HomeCarousel from "@/models/home_carousel";
import StandardApi from "@/middlewares/standard_api";
import axios from "axios";

const UpdateHomeCarousel = async (req, res) => StandardApi(req, res, { method: "POST", verify_admin: true }, async () => {
    const { slides } = req.body;
    if (!slides.length) return res.status(400).json({ success: false, msg: "The slides array can't be empty." });

    await ConnectDB();

    const oldCarousel = await HomeCarousel.findOne({}).lean();
    for (let [index, slide] of oldCarousel.slides.entries()) {
        try {
            const objDeletion = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/api/S3/delete-object?object_url=${slide.image.substring(1)}`)
            console.log(`Image #${index} deleted successfully.`)
        } catch (e) { console.log("Error deleting an S3 object: ", e) }
    }
    await HomeCarousel.deleteMany({});

    const carousel = await HomeCarousel.findOneAndUpdate({}, { slides }, { upsert: true, lean: true, new: true });
    res.status(200).json({
        success: true,
        msg: "The carousel updated successfully.",
        carousel
    })
})
export default UpdateHomeCarousel;