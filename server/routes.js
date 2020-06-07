const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./middleware/passport");
const User = require("./models/user");
const authController = require("./controllers/authentication");
const productController = require("./controllers/product");
const brandsController = require("./controllers/brands");
const categoriesController = require("./controllers/categories");
const retailersController = require("./controllers/retailers");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

/*****
  AUTH ROUTES
*****/
router.get("/", requireAuth, (req, res) => {
  res.send({ authenticated: true });
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/user/:id", requireAuth, async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.send(user);
});

router.post("/signup", authController.signup);
router.post("/signin", requireSignIn, authController.signIn);

/*****
  PRODUCT ROUTES
*****/
router.get("/products", requireAuth, productController.getProducts);

router.get("/products/:productId", requireAuth, productController.getProduct);

router.post("/products/add", requireAuth, productController.addProducts);

router.patch(
  "/products/:productId",
  requireAuth,
  productController.updateProduct
);

router.delete(
  "/products/delete/:productId",
  requireAuth,
  productController.deleteProduct
);

/*****
  BRAND ROUTES
*****/
router.get("/brands", requireAuth, brandsController.getBrands);

router.get("/brands/:id", requireAuth, brandsController.getBrand);

router.get("/brands/:id/products", requireAuth, brandsController.getProducts);

router.post("/brands/add", requireAuth, brandsController.addBrand);

router.patch("/brands/:id", requireAuth, brandsController.updateBrand);

router.delete("/brands/delete/:id", requireAuth, brandsController.deleteBrand);

/*****
  CATEGORY ROUTES
*****/
router.get("/categories", requireAuth, categoriesController.getCategories);

router.get(
  "/categories/:categoryId",
  requireAuth,
  categoriesController.getCategory
);

router.get(
  "/categories/:categoryId/products",
  requireAuth,
  categoriesController.getProducts
);

router.post("/categories/add", requireAuth, categoriesController.addCategory);

router.patch(
  "/categories/:categoryId",
  requireAuth,
  categoriesController.updateCategory
);

router.delete(
  "/categories/delete/:categoryId",
  requireAuth,
  categoriesController.deleteCategory
);

/*****
  RETAILER ROUTES
*****/
router.get("/retailers", requireAuth, retailersController.getRetailers);

router.get("/retailers/:id", requireAuth, retailersController.getRetailer);

router.post("/retailers", requireAuth, retailersController.addRetailer);

router.patch("/retailers/:id", requireAuth, retailersController.updateRetailer);

router.delete(
  "/retailers/:id",
  requireAuth,
  retailersController.deleteRetailer
);

router.patch(
  "/retailers/:id/products/add",
  requireAuth,
  retailersController.addRetailerProduct
);

router.patch(
  "/retailers/:id/products/update/:productId",
  requireAuth,
  retailersController.updateProductQuantity
);

router.delete(
  "/retailers/:id/products/delete/:productId",
  requireAuth,
  retailersController.deleteRetailerProduct
);

module.exports = router;
