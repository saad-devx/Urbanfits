const mongoose = require('mongoose')

const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter a valid email address"],
        unique: [true, "This email address is already in use"],
    },
    gender: {
        type: String,
        required: [true, "Please enter a valid gender"]
    },
    interests: {
        type: Array,
        required: true
    },
    user: {
        type: String,
        default: 'guest'
    }
}, { timestamps: true })

module.exports = mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema)