const Product = require('../models/Product');
const User = require('../models/User');

module.exports = {
    async index(request, response){
        const { type } = request.query;

        const products = await Product.find({ category: type });

        return response.json(products);
    }, 
    async indexAll(request, response){
        const products = await Product.find({});

        return response.json(products);
    }, 
    async store(request, response) {
        const { filename } = request.file;
        const { thumbnail, nameProduct, price, sizeProduct, description, datasheet, category } = request.body;
        const { user_id } = request.headers;

        const user = await User.findById(user_id);

        if(!user){
            return response.status(400).json({error: 'User does not exists.'})
        }

        const product =  await Product.create({
            user: user_id,
            thumbnail: filename,
            nameProduct, 
            price,
            sizeProduct,
            description, 
            datasheet, 
            category
        });
        
        return response.json(product);
    }
}