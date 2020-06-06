const Product = require("../models/product");
const Brand = require("../models/brands");
const Category = require("../models/category");

exports.getProducts = async (req, res) => {
  await Product.find({ _vendor: "5edbb5ab647d1e966d328dfa" })
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

exports.getProduct = async (req, res) => {
  Product.findOne({
    _id: req.params.productId,
    _vendor: "5edbb5ab647d1e966d328dfa",
  })
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product not found",
        });
      } else {
        res.send(product);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving product.",
      });
    });
};

exports.addProducts = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "product content can not be empty",
    });
  }
  try {
    const _vendor = "5edbb5ab647d1e966d328dfa";
    const product = new Product({ ...req.body, _vendor });
    const doc = await product.save();
    await Brand.findByIdAndUpdate(
      doc.brand.id,
      {
        $push: {
          products: { _id: doc._id },
        },
      },
      { new: true }
    );
    await Category.findByIdAndUpdate(
      doc.category.id,
      {
        $push: {
          products: { _id: doc._id },
        },
      },
      { new: true }
    );
    return res.send(doc);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding the product .",
    });
  }
};

exports.updateProduct = async (req, res) => {
  if (!req.body || !req.params.productId) {
    return res.status(400).send({
      message: "Incomplete details",
    });
  }
  try {
    const _id = req.params.productId;
    const doc = await Product.findOneAndUpdate(
      { _id, _vendor: "5edbb5ab647d1e966d328dfa" },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!doc) {
      return res.status(404).send();
    }
    return res.send(doc);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error updating Product",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndRemove({
      _id: req.params.productId,
      _vendor: "5edbb5ab647d1e966d328dfa",
    });
    if (!product) {
      return res.status(404).send({
        message: "Product not found",
      });
    }
    await Brand.findByIdAndUpdate(
      product.brand.id,
      {
        $pull: {
          products: { _id: product._id },
        },
      },
      { new: true }
    );
    await Category.findByIdAndUpdate(
      product.category.id,
      {
        $pull: {
          products: { _id: product._id },
        },
      },
      { new: true }
    );
    res.send(product);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Could not delete Product",
    });
  }
};
