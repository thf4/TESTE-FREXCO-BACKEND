const express = require("express");
const router = express.Router();
const Ship = require("../Models/ship");

router.post("/user/:_id/shipping", async (req, res) => {
  const { body = {} } = req;
  const {
    nameAd,
    address,
    cpf,
    zip,
    city,
    number,
    complement,
    telephone,
    cellphone,
  } = body;
  if (!/(\d{3})(\d{3})(\d{3})(\d{2})/.test(cpf)) {
    return res.status(401).json({ message: "Digite um cpf valido " });
  }
/*   if (!/([0-9]{2}[0-9]{3}-[0-9]{3}$)/.test(zip)) {
    return res.status(401).json({ message: "Digite um cep valido " });
  } */

  try {
    const response = await Ship.create(
      {
        name,
        address,
        cpf,
        zip,
        number,
        complement,
        city,
        telephone,
        cellphone,
      }
    );
    response.save();
    return res.json({ message: "Criado com sucesso! " });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Erro ao criar endereço! " });
  }
});

router.put("/user/:_id/shipping", async (req, res) => {
  const { body = {} } = req;
  const { _id } = req.params;
  const {
    name,
    address,
    cpf,
    zip,
    city,
    number,
    complement,
    telephone,
    cellphone,
  } = body;
  if (!/(\d{3})(\d{3})(\d{3})(\d{2})/.test(cpf)) {
    return res.status(401).json({ message: "Digite um cpf valido " });
  }
  /* if (!/(\d{5})-(\d{3})/.test(zip)) {
    return res.status(401).json({ message: "Digite um cep valido " });
  } */

  try {
    const response = await Ship.findByIdAndUpdate(
      { _id },
      {
        name,
        address,
        cpf,
        zip,
        number,
        complement,
        city,
        telephone,
        cellphone,
      }
    );
    response.save();
    return res.json({ message: "Criado com sucesso! " });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Erro ao criar endereço! " });
  }
});

router.get("/user/:_id/shipping", async (req, res) => {
  try {
    const response = await Ship.findById(req.params._id).lean();
    if (response) return res.status(200).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao carregar dados!" });
  }
});

router.delete("/user/:_id/shipping", async (req, res) => {
  try {
    await Ship.findByIdAndDelete(req.params._id).lean();
    return res.status(200).json({ message: "Deletado com sucesso !" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao deletar usuário!" });
  }
});

module.exports = router;
