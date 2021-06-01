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
    return res.json({ message: "Criado Com sucesso " });
  } catch (err) {
    return res.json({ message: "Erro ao criar usuário " });
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

    bcrypt.hash(password, 10);
    response.password = hash;
    response.save();
    return res.json({ message: "Criado Com sucesso " });
  } catch {
    return res.json({ message: "Erro ao criar usuário " });
  }
});

/* Recieve users data */
router.get("/:id", auth, (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);
