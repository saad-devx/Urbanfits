const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    new_email: {
        type: String,
        required: true
    },
    expireAt: {
        type: Date,
        expires: 300,
        default: Date.now()
    }
})
module.exports = mongoose.models.OTP || mongoose.model("OTP", OTPSchema)