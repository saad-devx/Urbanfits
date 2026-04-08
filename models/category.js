import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    name: {
        en: {
            type: String,
            required: true,
            unique: true
        },
        ar: {
            type: String,
            required: true,
            unique: true
        }
    },
    slug: {
        type: String
    },
    path: {
        type: String,
        unique: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    description: {
        en: String,
        ar: String,
    }
}, { timestamps: true })

export default mongoose.models.Category || mongoose.model("Category", CategorySchema)