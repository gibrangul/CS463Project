const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salesSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  //timestamps: true,
});

module.exports = mongoose.model('Sales', salesSchema);
