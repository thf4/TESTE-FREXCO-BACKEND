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
      status: "Pending",
    });
    response.save();
    return res.status(201).json({ message: "Adicionado com sucesso!" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

router.get("/user/:_id/cart/:_id", auth, async (req, res) => {
  const {_id : user} = req.params
  try {
    const response = await Cart.findById(user)
      .lean()
      .populate("product");

    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao finalizar!" });
  }
});

router.put("/user/:_id/cart/:_id", auth, async (req, res) => {
  const { body = {} } = req;
  const { status } = body;
  try {
    const response = await Cart.findByIdAndUpdate(req.params._id, { status });
    response.save();
    return res.status(201).json({ message: "Finalizado com sucesso !" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao finalizar!" });
  }
});

module.exports = router;
