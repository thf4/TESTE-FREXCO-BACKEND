const express = require("express");
const router = express.Router();

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
router.post("/cadastrar", (req, res) => {
  const { body={} } = req,
  const { name, surname, password, email, adress, cpf, zip, city, number, complement } = body;
  const response = User.create({
    name,
    surname,
    password,
    adress,
    email,
    cpf,
    zip,
    number,
    complement,
    city
  });

  return res.json({ message: "Hello word" });
});

/* Recieve users data */
router.get("/:id", auth, (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);
