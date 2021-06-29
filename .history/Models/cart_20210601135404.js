const mongoose = require("../Server/index");

const CartSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
