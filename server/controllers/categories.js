const Category = require("../models/category");
const Product = require("../models/product");

const getCategories = async (req, res) => {
  await Category.find()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the categories .",
      });
    });
};

const getCategory = async (req, res) => {
  Category.findById(req.params.categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found",
        });
      } else {
        res.send(category);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving category.",
      });
    });
};

const getProducts = async (req, res) => {
  categoryId = req.params.categoryId;
  await Product.find({ "category.id": categoryId })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the products .",
      });
    });
};

const addCategory = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "category content can not be empty",
    });
  }
  const category = new Category(req.body);
  await category
    .save()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the category .",
      });
    });
};

const updateCategory = async (req, res) => {
  if (!req.body || !req.params.categoryId) {
    return res.status(400).send({
      message: "Incomplete details",
    });
  }
  try {
    const id = req.params.categoryId;
    const doc = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!doc) {
      return res.status(404).send();
    }
    return res.send(doc);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error updating Category",
    });
  }
};

const deleteCategory = async (req, res) => {
  Category.findByIdAndRemove(req.params.categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found",
        });
      }
      res.send(category);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Could not delete Category",
      });
    });
};

module.exports = {
  getCategories,
  getCategory,
  getProducts,
  addCategory,
  updateCategory,
  deleteCategory,
};
