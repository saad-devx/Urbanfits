import mongoose from "mongoose"

const addressProps = {
    address_title: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    apt_suite: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phone_prefix: { type: String, required: true },
    phone_number: { type: String, required: true }
}

const AddressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    address1: addressProps,
    address2: addressProps
}, { timestamps: true })

module.exports = mongoose.models.Addresses || mongoose.model("Addresses", AddressSchema)