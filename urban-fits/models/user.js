const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        maxLength: [30, "Username cannot exceed 30 characters"],
        minLength: [4, "Username should have more than 4 characters"],
        unique: [true, "This username is already in use"]
    },
    image: {
        type: String,
        default: ""
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
        minLength: [8, "Password should be greater than 8 characters"],
    },
    role: {
        type: String,
        enum: ['guest', 'subscriber', 'customer', 'administrator', 'editor', 'author'],
        default: "customer"
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    title: {
        type: String
    },
    gender: {
        type: String
    },
    date_of_birth: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)