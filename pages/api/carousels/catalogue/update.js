import ConnectDB from "@/utils/connect_db";
import CatalogueCarousel from "@/models/catalogue_carousel";
import StandardApi from "@/middlewares/standard_api";
import axios from "axios";

const UpdateCatalogueCarousel = async (req, res) => StandardApi(req, res, { method: "POST", verify_admin: true }, async () => {
    const { slides } = req.body;
    if (!slides?.length) return res.status(400).json({ success: false, msg: "The slides array can't be empty." });
    await ConnectDB();

    const oldCarousel = await CatalogueCarousel.findOne({}).lean();
    if (oldCarousel) {
        for (let [index, slide] of oldCarousel.slides.entries()) {
            try {
                await axios.put(`${process.env.NEXT_PUBLIC_HOST}/api/S3/delete-object?object_url=${slide.image1.substring(1)}`)
                await axios.put(`${process.env.NEXT_PUBLIC_HOST}/api/S3/delete-object?object_url=${slide.image2.substring(1)}`)
                console.log(`Images of slide #${index} deleted successfully.`)
            } catch (e) { console.log("Error deleting an S3 object: ", e) }
        }
        await CatalogueCarousel.deleteMany({});
    }

    const carousel = await CatalogueCarousel.findOneAndUpdate({}, { slides }, { upsert: true, lean: true, new: true });
    res.status(200).json({
        success: true,
        msg: "The carousel updated successfully.",
        carousel
    })
})
export default UpdateCatalogueCarousel;