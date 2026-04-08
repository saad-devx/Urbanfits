import ConnectDB from "@/utils/connect_db";
import CatalogueCarousel from "@/models/catalogue_carousel";
import StandardApi from "@/middlewares/standard_api";

const GetCatalogueCarousel = async (req, res) => StandardApi(req, res, { verify_user: false }, async () => {
    await ConnectDB()
    const carousel = await CatalogueCarousel.findOne({}).lean();
    res.status(200).json({
        success: true,
        msg: "",
        carousel
    })
})
export default GetCatalogueCarousel;