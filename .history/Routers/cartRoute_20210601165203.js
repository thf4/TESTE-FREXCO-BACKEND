const express = require("express");
const router = express.Router();
const Cart = require("../Models/cart");

router.post("/user/:_id/cart", async (req, res) => {
  const { _id } = req.params;
  const { ...product } = req.body;
  try {
    const response = await Cart.create({
      ...product,
      user: _id,
    });
    response.save();
    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
