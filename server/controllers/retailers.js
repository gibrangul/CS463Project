const moment = require("moment");
const Retailer = require("../models/retailer");

const getRetailers = async (req, res) => {
  try {
    const retailers = await Retailer.find();
    if (!retailers) {
      return res.status(404).send({
        message: "No Retailers Found",
      });
    }
    return res.send(retailers);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Error Occurred while retrieving retailers",
    });
  }
};

const getRetailer = async (req, res) => {
  try {
    const id = req.params.id;
    const retailer = await Retailer.findById(id);
    if (!retailer) {
      return res.status(404).send({
        message: "No Retailer Found",
      });
    }
    return res.send(retailer);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Error Occurred while retrieving retailer",
    });
  }
};

const addRetailer = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(500).send({
        message: "Invalid Query",
      });
    }
    const data = { ...req.body, addedOn: moment().unix() };
    const retailer = new Retailer(data);
    const doc = await retailer.save();
    if (!doc) {
      return res.status(500).send({
        message: "Invalid input",
      });
    }
    return res.send(doc);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Invalid Input",
    });
  }
};

const updateRetailer = async (req, res) => {
  try {
    const retailerId = req.params.id;
    if (!req.body || !retailerId) {
      return res.status(500).send({
        message: "Invalid Query",
      });
    }
    const updatedRetailer = await Retailer.findByIdAndUpdate(
      retailerId,
      { $set: { ...req.body } },
      { new: true }
    );
    if (!updatedRetailer) {
      return res.status(500).send({
        message: "Error Adding Product",
      });
    }
    return res.send(updatedRetailer);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Invalid Input",
    });
  }
};

const deleteRetailer = async (req, res) => {
  try {
    const retailerId = req.params.id;
    if (!retailerId) {
      return res.status(500).send({
        message: "Invalid Query",
      });
    }
    const doc = await Retailer.findByIdAndDelete(retailerId);
    return res.send(doc);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Invalid Input",
    });
  }
};

const addRetailerProduct = async (req, res) => {
  try {
    const retailerId = req.params.id;
    if (!req.body || !retailerId) {
      return res.status(500).send({
        message: "Invalid Query",
      });
    }
    const updatedRetailer = await Retailer.findOneAndUpdate(
      { _id: retailerId },
      {
        $push: {
          products: req.body,
        },
      },
      { new: true }
    );
    if (!updatedRetailer) {
      return res.status(500).send({
        message: "Error Adding Product",
      });
    }
    return res.send(updatedRetailer);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Invalid Input",
    });
  }
};

const updateProductQuantity = async (req, res) => {
  try {
    const retailerId = req.params.id;
    if (!req.body || !retailerId) {
      return res.status(500).send({
        message: "Invalid Query",
      });
    }
    const updatedRetailer = await Retailer.findOneAndUpdate(
      { _id: retailerId, "products.id": req.params.productId },
      {
        $set: {
          "products.$.quantity": req.body.quantity,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!updatedRetailer) {
      return res.status(500).send({
        message: "Error Adding Product",
      });
    }
    return res.send(updatedRetailer);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Invalid Input",
    });
  }
};

const deleteRetailerProduct = async (req, res) => {
  try {
    const retailerId = req.params.id;
    if (!req.body || !retailerId) {
      return res.status(500).send({
        message: "Invalid Query",
      });
    }
    const updatedRetailer = await Retailer.findOneAndUpdate(
      { _id: retailerId },
      {
        $pull: {
          products: { id: req.params.productId },
        },
      },
      { new: true }
    );
    if (!updatedRetailer) {
      return res.status(500).send({
        message: "Error Adding Product",
      });
    }
    return res.send(updatedRetailer);
  } catch (err) {
    return res.status(404).send({
      message: err.message || "Invalid Input",
    });
  }
};

module.exports = {
  getRetailers,
  getRetailer,
  addRetailer,
  updateRetailer,
  deleteRetailer,
  addRetailerProduct,
  deleteRetailerProduct,
  updateProductQuantity,
};
