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

    bcrypt.hash(password, 10);
    response.password = hash;
    response.save();
  } catch {}

  return res.json({ message: "Hello word" });
});

/* Recieve users data */
router.get("/:id", auth, (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);
