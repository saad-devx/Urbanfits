import mongoose from "mongoose"

const HomeCarouselSchema = new mongoose.Schema({
    slides: [
        {
            title: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            href: String
        }
    ]
}, { timestamps: true })

export default mongoose.models.HomeCarousel || mongoose.model("HomeCarousel", HomeCarouselSchema)