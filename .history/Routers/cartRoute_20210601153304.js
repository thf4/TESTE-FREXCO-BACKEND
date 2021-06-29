const express = require("express");
const router = express.Router();
const Cart = require("../Models/cart");

router.post("/cart/:_id", async (req, res) => {
  const { body = {} } = req;
  const { address, cpf, product } = body;
  try {
    const response = await Cart.create( { address, cpf, ...product });
    response.save();
    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
