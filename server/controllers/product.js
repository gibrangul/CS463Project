const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  await Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving the products .',
      });
    });
};

exports.getProduct = async (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: 'Product not found',
        });
      } else {
        res.send(product);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: 'Error retrieving product.',
      });
    });
};

exports.addProducts = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'product content can not be empty',
    });
  }
  const product = new Product(req.body);
  await product
    .save()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while adding the product .',
      });
    });
};

exports.updateProduct = async (req, res) => {
  if (!req.body || !req.params.productId) {
    return res.status(400).send({
      message: 'Incomplete details',
    });
  }
  try {
    const id = req.params.productId;
    const doc = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!doc) {
      return res.status(404).send();
    }
    return res.send(doc);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Error updating Product',
    });
  }
};

exports.deleteProduct = async (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: 'Product not found',
        });
      }
      res.send({ message: 'Product deleted successfully!' });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || 'Could not delete Product',
      });
    });
};
