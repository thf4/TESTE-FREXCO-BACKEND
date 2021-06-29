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
    let updateQuery = [];
    products.forEach((p, i) => {
      const prod = product.find((e) => e.productId === p._id);
      if (prod) updateQuery.push({ _id: p._id, qty: p.qty - prod.count });
      if (prod && prod.count > p.qty) {
        index = i;
        hasStock = false;
      }
    });
    if (hasStock) {
      for (let i = 0; i < updateQuery.length; i++) {
        const element = updateQuery[i];
        await Product.updateOne({ _id: element._id }, { qty: element.qty });
      }
      const response = await Cart.create({
        user,
        product,
        status: "Finalizado",
      });
      response.save();
      return res.status(201).json(response);
    }
    return res
      .status(400)
      .json({ message: "Produto sem estoque!", product: products[index] });
  } catch (err) {
    return res.status(500).json({ message: "Erro inesperado!" });
  }
});

module.exports = router;
