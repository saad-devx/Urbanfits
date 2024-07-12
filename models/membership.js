import mongoose from "mongoose";
import { membershipData } from "@/uf.config";

const MembershipSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    current_level: {
        title: {
            en: {
                type: String,
                required: true
            },
            ar: {
                type: String,
                required: true
            },
        },
        name: {
            type: String,
            enum: Object.keys(membershipData)
        }
    },
    achieved_benefits: [
        {
            name: {
                type: String,
                required: true
            },
            title: {
                en: {
                    type: String,
                    required: true
                },
                ar: {
                    type: String,
                    required: true
                },
            }
        }
    ],
    total_orders: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default mongoose.models.Membership || mongoose.model("Membership", MembershipSchema)