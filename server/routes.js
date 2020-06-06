const express = require("express");
const router = express.Router();
const productController = require("./controllers/product");
const brandsController = require("./controllers/brands");
const categoriesController = require("./controllers/categories");
const retailersController = require("./controllers/retailers");

/*****
  PRODUCT ROUTES
*****/
router.get("/products", productController.getProducts);

router.get("/products/:productId", productController.getProduct);

router.post("/products/add", productController.addProducts);

router.patch("/products/:productId", productController.updateProduct);

router.delete("/products/delete/:productId", productController.deleteProduct);

/*****
  BRAND ROUTES
*****/
router.get("/brands", brandsController.getBrands);

router.get("/brands/:id", brandsController.getBrand);

router.get("/brands/:id/products", brandsController.getProducts);

router.post("/brands/add", brandsController.addBrand);

router.patch("/brands/:id", brandsController.updateBrand);

router.delete("/brands/delete/:id", brandsController.deleteBrand);

/*****
  CATEGORY ROUTES
*****/
router.get("/categories", categoriesController.getCategories);

router.get("/categories/:categoryId", categoriesController.getCategory);

router.get(
  "/categories/:categoryId/products",
  categoriesController.getProducts
);

router.post("/categories/add", categoriesController.addCategory);

router.patch("/categories/:categoryId", categoriesController.updateCategory);

router.delete(
  "/categories/delete/:categoryId",
  categoriesController.deleteCategory
);

/*****
  RETAILER ROUTES
*****/
router.get("/retailers", retailersController.getRetailers);

router.get("/retailers/:id", retailersController.getRetailer);

router.post("/retailers", retailersController.addRetailer);

router.patch("/retailers/:id", retailersController.updateRetailer);

router.delete("/retailers/:id", retailersController.deleteRetailer);

router.patch(
  "/retailers/:id/products/add",
  retailersController.addRetailerProduct
);

router.patch(
  "/retailers/:id/products/update/:productId",
  retailersController.updateProductQuantity
);

router.delete(
  "/retailers/:id/products/delete/:productId",
  retailersController.deleteRetailerProduct
);

module.exports = router;
