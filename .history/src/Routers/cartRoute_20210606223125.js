const express = require("express");
const router = express.Router();

const Cart = require("../Models/cart");
const auth = require("../MIddlewares/auth");
const Product = require("../Models/product");

router.post("/user/:_id/cart", auth, async (req, res) => {
  const { body = {} } = req;
  const { qty, qtyPro } = body;
  const { _id } = req.params;
  const { ...product } = req.body;
  const stock = Product.find({ qty: qty }) - Cart.find({ qtyPro: qtyPro });

  if (Product.find({ qty: qty }) === 0) {
    return res.status(401).json({ message: "Produto indisponivel !" });
  }
  if ({ ...product.length } === 0)
    return res.status(401).json({ message: "Adicione um item ao carrinho!" });

  try {
    const response = await Cart.create({
      ...product,
      user: _id,
      status: "Finalizado",
      qtyPro,
    });

    stock;
    response.save();
    return res.status(201).json({ message: "Adicionado com sucesso!" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});
router.get("/cart/:_id", auth, async (req, res) => {
  const { body = {} } = req;
  const { _id } = req.params;
  

  try {
    const response = await Cart.find({
     username:_id
    }).populate("products");

    stock;
    response.save();
    return res.status(201).json({ message: "Adicionado com sucesso!" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;
