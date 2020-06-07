const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
  },
  brand: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
  },
  size: {
    type: String,
    required: true,
  },
  upc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  _vendor: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
