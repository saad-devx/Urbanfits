import mongoose from "mongoose"

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: [true, "Please enter a valid gender"]
    },
    interests: {
        type: Array,
        required: true
    },
    active_by_email: {
        type: Boolean,
        default: false
    },
    active_by_phone: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema)