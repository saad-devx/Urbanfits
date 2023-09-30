import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        maxLength: [30, "Username cannot exceed 30 characters"],
        minLength: [4, "Username should have more than 4 characters"],
        unique: [true, "This username is already in use"]
    },
    register_provider: {
        type: String,
        enum: ["urbanfits", "google", "apple"],
        default: "urbanfits"
    },
    image: {
        type: String,
        default: "https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/default-pfp.jpg"
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
    },
    two_fa_secret: {
        type: String,
        minLength: 20,
        select: false
    },
    two_fa_activation_date: Date,
    two_fa_enabled: {
        type: Boolean,
        default: false
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
    country: String,
    is_active: {
        type: Boolean,
        default: false
    },
    uf_wallet: {
        card_number: {
            type: String,
            required: true,
            immutable: true
        },
        points: {
            type: Number,
            default: 0
        },
        worth: Number,
        bar_code: {
            type: String,
            required: true
        }
    },
    purchases: {
        type: Number,
        default: 0
    },
    date_of_birth: {
        type: String
    }
}, { timestamps: true })

UserSchema.pre('save', function (next) {
    if (this.uf_wallet.points !== null && this.uf_wallet.points !== undefined) {
        this.uf_wallet.worth = this.uf_wallet.points * process.env.UF_POINT_RATE;
    }
    next();
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)