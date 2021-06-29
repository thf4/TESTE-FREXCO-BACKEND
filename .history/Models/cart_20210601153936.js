const mongoose = require("../Server/index");

const CartSchema = new mongoose.Schema({
  usernameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
    },
  ],
  cpf: {
    type: Number,
    require: true,
  },

  address: {
    city: {
      type: String,
      require: true,
    },
    zip: {
      type: Number,
      require: true,
    },
    number: {
      type: Number,
      require: true,
    },
    complement: {
      type: String,
      require: true,
    },
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
