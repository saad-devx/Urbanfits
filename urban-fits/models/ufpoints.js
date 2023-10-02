import mongoose from "mongoose";

const UFpointsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    card_number: {
        type: String,
        ref: 'User'
    },
    points: {
        type: Number,
        required: true
    },
    worth: Number,
    source: {
        type: String,
        required: true
    },
    expiration_date: { type: Date, required: true },
}, { timestamps: true });

UFpointsSchema.pre('save', function (next) {
    if (this.points !== null && this.points !== undefined) {
        this.worth = this.points * 0.008;
    }
    next();
});

UFpointsSchema.index({ expiration_date: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.models.UFpoints || mongoose.model('UFpoints', UFpointsSchema);