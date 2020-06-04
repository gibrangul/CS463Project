const mongoose = require('mongoose');

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  sales: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sales',
  },

  //timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
