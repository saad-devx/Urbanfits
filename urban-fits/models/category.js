const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    slug: {
        type: 'string',
        unique: true
    },
    path: {
        type: String,
        unique: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    description: {
        type: 'string'
    }
}, { timestamps: true })

module.exports = mongoose.models.Category || mongoose.model("Category", categorySchema)