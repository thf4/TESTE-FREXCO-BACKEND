const mongoose = require("../Server/index");

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  product: [
    {
      count: {
        type: Number,
        require: true,
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true,
      },
    },
  ],
  qtyPro: {
    type: String,
    require: true,
  },
  status: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
