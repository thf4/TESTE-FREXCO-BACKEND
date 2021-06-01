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
  const response = U;
  return res.json({ message: "Hello word" });
});

/* Recieve users data */
router.get("/cadastrar", auth, (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);
