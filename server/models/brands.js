const moment = require("moment");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  addedOn: {
    type: Number,
    default: moment().unix(),
  },
  products: [productSchema],
});

module.exports = mongoose.model("Brands", brandSchema);
