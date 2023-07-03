const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name for your product"],
        trim: true
    },
    cover_image: { type: String },
    price: {
        type: Number,
        required: [true, "Please enter a price for your product"],
        maxlength: [10, "Price can't be more than 10 figures"]
    },
    description: {
        type: String,
        required: [true, "Please enter a description for your product"],
        trim: true
    },
    p_category: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        path: String
    },
    slug: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    },
    ratings: {
        type: Number,
        default: 0
    },
    variants: [
        {
            color: {
                type: String,
            },
            color_name: { type: String },
            images: {
                type: Array
            },
            sizes: [{
                size: String,
                quantity: Number
            }],
            stock: {
                type: Number,
                required: [true, "Please enter stock of the product"],
                default: 0
            }
        }
    ],
    seo_detials: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        meta_keywords: { type: Array, required: true },
    },
    shipping_detials: {
        width: { type: String, required: true },
        height: { type: String, required: true },
        weight: { type: String, required: true },
        fees: { type: Number, required: true },
    }

}, { timestamps: true })

ProductSchema.pre('save', function (next) {
    this.variants.forEach((variant) => {
        const totalQuantity = variant.sizes.reduce((total, size) => total + size.quantity, 0);
        variant.stock = totalQuantity;
    });
    next();
});

module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema)