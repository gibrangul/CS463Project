const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const RetailerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  products: [productSchema],
  addedOn: {
    type: String,
    required: true,
  },
});

const Retailer = mongoose.model("Retailers", RetailerSchema);

module.exports = Retailer;
