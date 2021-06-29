const express = require("express");
const router = express.Router();
const User = require("../Models/users");

router.put("/user/:_id/shipping", async (req, res) => {
  const { body = {} } = req;
  const { _id } = req.params;
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
  /* if (!/(\d{5})-(\d{3})/.test(zip)) {
    return res.status(401).json({ message: "Digite um cep valido " });
  } */

  try {
    const response = await User.findByIdAndUpdate(
      { _id },
      {
        nameAd,
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

module.exports = router;
