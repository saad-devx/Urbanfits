import mongoose from "mongoose";

const UfTasksSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tasks: [
        {
            name: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: String,
            type: {
                type: String,
                default: 'in_app',
                enum: ['in_app', 'social']
            },
            reward: Number,
            image: String,
            need_image: {
                type: Boolean,
                default: false
            },
            link: String,
            completed: {
                type: Boolean,
                default: false,
                required: true
            }
        }
    ]
}, { timestamps: true })

export default mongoose.models.UfTasks || mongoose.model("UfTasks", UfTasksSchema)