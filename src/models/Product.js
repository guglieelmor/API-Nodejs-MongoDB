const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    thumbnail: String, 
    nameProduct: String,
    price: Number,
    sizeProduct: String,
    description: String,
    datasheet: String,
    category: String, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refL: 'User'
    } 
});

module.exports = mongoose.model('Product', ProductSchema);