import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    coupon_code: {
        required: true,
        type: String
    },
    description: String,
    allow_free_shipping: {
        type: Boolean,
        default: false
    },
    expiration_date: Date

},{timestamps: true})

CouponSchema.index({ expiration_date: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema)