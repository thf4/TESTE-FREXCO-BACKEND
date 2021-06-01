const express = require("express");
const router = express.Router();

const auth = require("../MIddlewares/auth");
const Product = require("../Models/product");

/* listen Products */
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

router.get("/product", async (req, res) => {
  const { body = {} } = req;
  const { name, description, price, qty } = body;
  try {
    await Product.findOne({
      name,
      description,
      price,
      qty,
    }).lean();
    return res.status(200).json({ message: "Produto Listados!" });
  } catch (err) {
    return res.status(400).json({ message: "Erro ao listar produtos!" });
  }
});

router;
module.exports = router;
