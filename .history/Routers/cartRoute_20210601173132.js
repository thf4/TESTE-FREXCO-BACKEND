const express = require("express");
const router = express.Router();

const Cart = require("../Models/cart");
const auth = require("../MIddlewares/auth");

router.post("/user/:_id/cart", auth, async (req, res) => {
  const { _id } = req.params;
  const { ...product } = req.body;
  try {
    const response = await Cart.create({
      ...product,
      user: _id,
      status:"pending",
    });
    response.save();
    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
