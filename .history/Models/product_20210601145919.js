const mongoose = require("../Server/index");

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
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
    require: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
