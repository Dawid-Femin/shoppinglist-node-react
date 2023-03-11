const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const SingleItem = mongoose.model('singleItem', ItemSchema);

module.exports = SingleItem;