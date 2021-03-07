const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');
const SessionController = require('./controllers/SessionController');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions/create', SessionController.store);
routes.post('/sessions/consult', SessionController.consult);
routes.get('/products', ProductController.index);
routes.get('/products/all', ProductController.indexAll);
routes.post('/products', upload.single('thumbnail'),  ProductController.store);

module.exports = routes;