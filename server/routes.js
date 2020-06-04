const express = require('express');
const router = express.Router();
const productController = require('./controllers/product');
const Product = require('./models/product');

router.get('/products', productController.getProducts);

router.get('/products/:productId', productController.findOne);

router.post('/addproducts', productController.addProducts);

// app.put('/products/:productId', productController.updateProduct);

// app.delete('/products/:productId', productsController.delete);

module.exports = router;
