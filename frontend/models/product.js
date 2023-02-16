const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name for your product"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please enter a price for your product"],
        maxlength: [10, "Price can't be more than 10 figures"]
    },
    size:{
        type: Array,
        default: ["M", "L"]
    },
    color:{
        type: Array,
        default: ["black", "white"]
    },
    description: {
        type: String,
        required: [true, "Please enter a description for your product"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please enter a category for your product"]
    },
    subcategories: {
        type: Array
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: { type: String, required: true },
        url: { type: String, required: true },
    }],
    stock: {
        type: Number,
        required: [true, "Please enter stock of the product"],
        default: 1
    }

}, { timestamps: true })

module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema)