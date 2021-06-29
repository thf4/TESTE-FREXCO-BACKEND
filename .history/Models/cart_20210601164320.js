const mongoose = require("../Server/index");

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
    },
  ],
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
