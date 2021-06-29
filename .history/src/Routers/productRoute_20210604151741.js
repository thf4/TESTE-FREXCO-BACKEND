const express = require("express");
const router = express.Router();

const auth = require("../MIddlewares/auth");
const Product = require("../Models/product");

/* Create New Products */
router.post("/user/:_id/product", auth, async (req, res) => {
  const { body = {} } = req;
  const { name, description, price, qty } = body;
  if (!name) {
    return res.status(401).json({ message: "Digite um nome !" });
  }
  if (!description)
    return res
      .status(401)
      .json({ message: "Digite uma descrição do produto !" });
  if (!price)
    return res
      .status(401)
      .json({ message: "Digite o preço produto, apenas número !" });
  if (!qty)
    return res
      .status(401)
      .json({ message: "Digite a quantidade do produto que você possui!" });
  try {
    const product = await Product.create({
      name,
      description,
      price,
      qty,
      image
    });
    product.save();
    return res.status(200).json({ message: "Produto criado com sucesso!" });
  } catch (err) {
    return res.status(400).json({ message: "Erro ao criar produto!" });
  }
});

/* Edit Products */
router.put("/user/:_id/product/:_id", auth, async (req, res) => {
  const { body = {} } = req;
  const { name, description, price, qty } = body;
  try {
    const product = await Product.findByIdAndUpdate(req.params._id, {
      name,
      description,
      price,
      qty,
    });
    product.save();
    return res.status(200).json({ message: "Produto editado com sucesso!" });
  } catch (err) {
    return res.status(400).json({ message: "Erro ao editar produto!" });
  }
});

/* Listen Products */
router.get("/product", async (req, res) => {
  try {
    const response = await Product.find().populate("product");
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ message: "Erro ao listar produtos!" });
  }
});

/* Deleted Product */
router.delete("/user/:_id/product/:_id", auth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params._id).lean();
    return res.status(201).json({ message: "Deletado com sucesso! " });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao deletar produto!" });
  }
});

module.exports = router;
