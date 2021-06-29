const mongoose = require("../Server/index");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  qty: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
