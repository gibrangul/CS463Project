const express = require('express');
const router = express.Router();
const productController = require('./controllers/product');
const brandsController = require('./controllers/brands');
const categoriesController = require('./controllers/categories');

//Product Routes
router.get('/products', productController.getProducts);

router.get('/products/:productId', productController.getProduct);

router.post('/products/add', productController.addProducts);

router.patch('/products/:productId', productController.updateProduct);

router.delete('/products/delete/:productId', productController.deleteProduct);

//Brand Routes
router.get('/brands', brandsController.getBrands);

router.get('/brands/:id', brandsController.getBrand);

router.post('/brands/add', brandsController.addBrand);

router.patch('/brands/:id', brandsController.updateBrand);

router.delete('/brands/delete/:id', brandsController.deleteBrand);

//Category Routes
router.get('/categories', categoriesController.getCategories);

router.get('/categories/:categoryId', categoriesController.getCategory);

router.get(
  '/categories/products/:categoryId',
  categoriesController.getProducts
);

router.post('/categories/add', categoriesController.addCategory);

router.patch('/categories/:categoryId', categoriesController.updateCategory);

router.delete(
  '/categories/delete/:categoryId',
  categoriesController.deleteCategory
);

module.exports = router;
