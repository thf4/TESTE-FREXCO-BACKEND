const express = require("express");
const router = express.Router();
const Cart = require("../Models/cart");

router.post("/cart/:_id", async (req, res) => {
  const { _id, product } = req.params;
  try {
    const response = await Cart.create({

      productId: product,
      usernameId: _id,
    });

    response.save();
    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
