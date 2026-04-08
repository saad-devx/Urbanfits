import mongoose from "mongoose"

const CataglogueCarouselSchema = new mongoose.Schema({
    slides: [
        {
            title: {
                type: String,
                required: true
            },
            image1: {
                type: String,
                required: true
            },
            image2: {
                type: String,
                required: true
            },
            href: String
        }
    ]
}, { timestamps: true })

export default mongoose.models.CatalogueCarousel || mongoose.model("CatalogueCarousel", CataglogueCarouselSchema)