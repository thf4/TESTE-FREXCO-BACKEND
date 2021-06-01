const express = require("express");
const router = express.Router();

const auth = require("../MIddlewares/auth");
const Product = require("../Models/product");

/* Create New Products */
router.post("/product", async (req, res) => {
  const { body = {} } = req;
  const { name, description, price, qty } = body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      qty,
    });
    product.save();
    return res.status(200).json({ message: "Produto criado com sucesso!" });
  } catch (err) {
    return res.status(400).json({ message: "Erro ao criar produto!" });
  }
});

/* Edit Products */
router.put("/product/:_id", async (req, res) => {
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
  const { body = {} } = req;
  const { name, description, price, qty } = body;
  try {
    await Product.find().lean();
    return res.status(200).json({ message: "Produto Listados!" });
  } catch (err) {
    return res.status(400).json({ message: "Erro ao listar produtos!" });
  }
});

/* Deleted Product */
router.delete("/product/:_id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params._id).lean();
    return res.status(201).json({ message: "Deletado com sucesso! " });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao deletar produto!" });
  }
});

module.exports = router;
