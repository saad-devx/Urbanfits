import mongoose from "mongoose";
import { giftCardMethods } from "@/uf.config";

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
        name: String,
        email: String,
        message: String
    },
    receiver: {
        name: String,
        email: String
    },
    buy_for: {
        type: String,
        default: "self",
        enum: Object.keys(giftCardMethods)
    },
    cover_image: String,
    gift_code: requiredStringType,
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.models?.Giftcard || mongoose.model("Giftcard", GiftcardSchema)