const express = require("express");
const router = express.Router();

const Cart = require("../Models/cart");
const auth = require("../MIddlewares/auth");
const Product = require("../Models/product");

router.post("/user/:_id/cart", auth, async (req, res) => {
  const { body = {} } = req;
  const { qty, qtyPro } = body;
  const { _id } = req.params;
  const { product } = req.body;
  const stock = Product.find({ qty: qty });

  if (stock === 0) {
    return res.status(401).json({ message: "Produto indisponivel !" });
  }

  try {
    const response = await Cart.create({
      $addToSet: { $each: { product: [{ ...product }] } },
      user: _id,
      status: "Finalizado",
      qtyPro,
    });

    stock;
    response.save();
    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
