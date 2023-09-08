const mongoose = require('mongoose')

const OrderSessionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    email: String,
    name: String,
    order_items: Array,
    shipping_info: Object
}, { strict: false, timestamps: true })
module.exports = mongoose.models.OrderSession || mongoose.model("OrderSession", OrderSessionSchema)