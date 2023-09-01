const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    new_email: {
        type: String,
    },
    new_password: {
        type: String,
    },
    email: {
        type: String,
    },
    new_user: {
        username: {
            type: String,
            required: [true, "Please enter a username"],
            maxLength: [30, "Username cannot exceed 30 characters"],
            minLength: [4, "Username should have more than 4 characters"],
            unique: [true, "This username is already in use"]
        },
        phone_prefix: {
            type: String
        },
        phone_number: {
            type: String
        },
        email: {
            type: String,
            required: [true, "Please enter a valid email address"],
            unique: [true, "This email address is already in use"],
        },
        password: {
            type: String,
            minLength: [8, "Password should be greater than 8 characters"]
        }
    },
    expireAt: {
        type: Date,
        expires: 300,
        default: Date.now()
    }
})
module.exports = mongoose.models.OTP || mongoose.model("OTP", OTPSchema)