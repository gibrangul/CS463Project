const mongoose = require("mongoose");
const moment = require("moment");

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

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  addedOn: {
    type: Number,
    default: moment().unix(),
  },
  products: [productSchema],
  //timestamps: true,
});

module.exports = mongoose.model("Category", categorySchema);
