import mongoose from "mongoose";

const SignsSchema = new mongoose.Schema({
    signups: {
        type: Number,
        default: 0
    },
    visits: {
        type: Number,
        default: 0
    },
    month: String,
    date: String,
    year: String
}, { timestamps: true })

export default mongoose.models.Signs || mongoose.model("Signs", SignsSchema)