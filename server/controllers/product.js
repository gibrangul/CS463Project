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

exports.findOne = async (req, res) => {
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
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
  });
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
