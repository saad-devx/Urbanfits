import ConnectDB from "@/utils/connect_db";
import HomeCarousel from "@/models/home_carousel";
import StandardApi from "@/middlewares/standard_api";

const GetHomeCarousel = async (req, res) => StandardApi(req, res, { verify_user: false }, async () => {
    await ConnectDB()
    const carousel = await HomeCarousel.findOne({}).lean();
    res.status(200).json({
        success: true,
        msg: "",
        carousel
    })
})
export default GetHomeCarousel;