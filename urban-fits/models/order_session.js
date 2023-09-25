import mongoose from "mongoose"

const OrderSessionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    email: String,
    name: String,
    order_items: Array,
    shipping_address: Object,
    billing_address: Object,
    price_details: Object
}, { strict: false, timestamps: true })
module.exports = mongoose.models.OrderSession || mongoose.model("OrderSession", OrderSessionSchema)