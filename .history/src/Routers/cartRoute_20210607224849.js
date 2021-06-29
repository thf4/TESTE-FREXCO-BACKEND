const express = require("express");
const router = express.Router();

const Cart = require("../Models/cart");
const auth = require("../MIddlewares/auth");
const Product = require("../Models/product");

router.post("/cart", auth, async (req, res) => {
  try {
    const { body = {} } = req;
    const { user, product } = body;
    const prodIds = product.map(({ productId }) => productId);
    const products = await Product.find({ _id: { $in: prodIds } });
    let hasStock = true;
    let index = null;
    products.forEach((p, i) => {
      const prod = product.find((e) => e.productId === p._id);
      if (prod && prod.count > p.qty) {
        index = i;
        hasStock = false;
      }
    });
    if (hasStock) {
      const response = await Cart.create({
        user,
        product,
        status: "Finalizado",
      });
      response.save();
      return res.status(201).json(response);
    }
    return res.status(400).json({ message: "Produto sem estoque!" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
