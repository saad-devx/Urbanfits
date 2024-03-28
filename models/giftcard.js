import mongoose from "mongoose"

const requiredStringType = {
    type: String,
    required: true
}
const GiftcardSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    sender: {
        name: requiredStringType,
        email: requiredStringType,
        message: String
    },
    receiver: {
        name: requiredStringType,
        email: requiredStringType
    },
    buy_for: {
        type: String,
        default: "self",
        enum: ["slef", "friend"]
    },
    cover_image: String,
    gift_code: requiredStringType,
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.models?.Giftcard || mongoose.model("Giftcard", GiftcardSchema)