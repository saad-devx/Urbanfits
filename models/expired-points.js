import mongoose from "mongoose";

const ExpiredPointsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    card_number: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    earned: Number,
    spent: Number,
    balance: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.models["expired-points"] || mongoose.model('expired-points', ExpiredPointsSchema);