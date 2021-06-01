const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const auth = require("../MIddlewares/auth");
const User = require("../Models/users");

/* Home */
router.get("/", (req, res) => {
  return res.json({ message: "Hello word" });
});

/* Login */
router.post("/login", (req, res) => {
  return res.json({ message: "Hello word" });
});

/* Cadastrar */
router.post("/cadastrar", async (req, res) => {
  const { body = {} } = req;
  const {
    name,
    surname,
    password,
    email,
    adress,
    cpf,
    zip,
    city,
    number,
    complement,
  } = body;
  const checkEmail = User.findOne({ email: email }).lean();
  if (checkEmail) {
    return res
      .status(401)
      .json({ message: "Email em uso, escolha outro email para se cadastrar" });
  }
  if (!/(\d{3})(\d{3})(\d{3})(\d{2})/.test(cpf)) {
    return res.status(401).json({ message: "Digite um cpf valido " });
  }
  if (!email)
    return res.status(401).json({ message: "Digite um email valido!" });
  if (!password || password.length < 5)
    return res
      .status(401)
      .json({ message: "Digite uma senha com 5 caracteres ou mais " });
  if (!/([0-9]{2}[0-9]{3}[0-9]{3}$)/.test(zip)) {
    return res.status(401).json({ message: "Digite um cep valido " });
  }
  try {
    const response = await User.create({
      name,
      surname,
      password,
      adress,
      email,
      cpf,
      zip,
      number,
      complement,
      city,
    });

    const hash = bcrypt.hashSync(password, 10);
    response.password = hash;
    response.save();
    return res.status(200).json({ message: "Criado Com sucesso " });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Erro ao criar usuário " });
  }
});

router.put("/user/:_id", auth, async (req, res) => {
  const { body = {} } = req.params;
  const {
    _id,
    name,
    surname,
    password,
    email,
    adress,
    cpf,
    zip,
    city,
    number,
    complement,
  } = body;
  if (!/(\d{3})(\d{3})(\d{3})(\d{2})/.test(cpf)) {
    return res.status(401).json({ message: "Digite um cpf valido " });
  }
  if (!email)
    return res.status(401).json({ message: "Digite um email valido!" });
  if (!password || password.length < 5)
    return res
      .status(401)
      .json({ message: "Digite uma senha com 5 caracteres ou mais " });
  if (!/([0-9]{2}[0-9]{3}[0-9]{3}$)/.test(zip)) {
    return res.status(401).json({ message: "Digite um cep valido " });
  }
  try {
    const response = await User.updateOne(
      { _id },
      {
        name,
        surname,
        password,
        adress,
        email,
        cpf,
        zip,
        number,
        complement,
        city,
      }
    );

    const hash = bcrypt.hashSync(password, 10);
    response.password = hash;
    response.save();
    return res.json({ message: "Atualizado com sucesso " });
  } catch {
    return res.json({ message: "Erro ao editar usuário  " });
  }
});

/* Recieve users data */
router.get("/:id", auth, (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);
