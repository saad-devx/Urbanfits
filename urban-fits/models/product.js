import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
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
    uf_points: {
        type: Number,
        default: 0
    },
    sale_price: {
        type: Number,
        maxlength: [10, "Price can't be more than 10 figures"]
    },
    gift_code: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: [true, "Please enter a description for your product"],
        trim: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default: mongoose.Types.ObjectId("64b6d07d82dcb19775042d76")
    }],
    slug: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    },
    active: {
        type: Boolean,
        required: true,
        default: false
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
                type: Array,
                default: []
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
    bundle_items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    seo_details: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        meta_keywords: { type: String, required: true },
    },
    shipping_details: {
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
    let { price, uf_points } = this
    if (!uf_points && !this.sale_price) {
        if (price >= 1 && price < 50) uf_points = 40
        else if (price >= 50 && price < 100) uf_points = 80
        else if (price >= 100 && price < 150) uf_points = 120
        else if (price >= 150 && price < 200) uf_points = 160
        else if (price >= 200 && price < 300) uf_points = 200
        else if (price >= 300 && price < 400) uf_points = 250
        else if (price >= 400 && price < 500) uf_points = 300
        else if (price > 499) uf_points = 350
        else uf_points = 0
    }
    next();
});

module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema)