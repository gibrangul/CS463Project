const Brand = require("../models/brands");
const Product = require("../models/product");

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    return res.send(brands);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Error retrieving Brands",
    });
  }
};

const getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    return res.send(brand);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Error retrieving Brands",
    });
  }
};

const getProducts = async (req, res) => {
  id = req.params.id;
  await Product.find({ "brand.id": id })
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

const addBrand = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Incomplete Details",
    });
  }
  try {
    const brand = new Brand(req.body);
    const doc = await brand.save();
    return res.send(doc);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error retrieving Brands",
    });
  }
};

const updateBrand = async (req, res) => {
  if (!req.params.id || !req.body) {
    return res.status(400).send({
      message: "Incomplete Details",
    });
  }
  try {
    const id = req.params.id;
    const doc = await Brand.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true }
    );
    if (!doc) {
      return res.status(404).send();
    }
    return res.send(doc);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error retrieving Brands",
    });
  }
};

const deleteBrand = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      message: "Incomplete Details",
    });
  }
  try {
    const id = req.params.id;
    const doc = await Brand.findByIdAndDelete(id);
    if (!doc) {
      return res.status(404).send();
    }
    return res.send(doc);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error retrieving Brands",
    });
  }
};

module.exports = {
  getBrands,
  getBrand,
  getProducts,
  addBrand,
  updateBrand,
  deleteBrand,
};
