const express = require('express');
const router = express.Router();
const productController = require('./controllers/product');
const brandsController = require('./controllers/brands')

router.get('/products', productController.getProducts);

router.get('/products/:productId', productController.findOne);

router.post('/products/add', productController.addProducts);

router.delete('/products/:id')


router.get('/brands', brandsController.getBrands)

router.get('/brands/:id', brandsController.getBrand)

router.post('/brands/add', brandsController.addBrand)

router.patch('/brands/:id', brandsController.updateBrand)

router.delete('/brands/delete/:id', brandsController.deleteBrand)

module.exports = router;
