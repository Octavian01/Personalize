const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const popularSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    raiting: {
        type: Number,
        required: true 
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    specificItem: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Popular', popularSchema);