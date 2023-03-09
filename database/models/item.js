const mongoose = require('mongoose');

const SingleItem = mongoose.model('singleItem', {
    name: String,
    quantity: Number,
});

module.exports = SingleItem;