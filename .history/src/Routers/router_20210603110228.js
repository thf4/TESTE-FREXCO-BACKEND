const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const secret = require("../Config/secret.json");
const jwt = require("jsonwebtoken");

const auth = require("../MIddlewares/auth");
const User = require("../Models/users");

/* Home */
router.get("/", (req, res) => {
  return res.json({ message: "Hello word" });
});

/* Login */
router.post("/login", async (req, res) => {
  const { body = {} } = req;
  const { email, password } = body;
  const user = await User.findOne({ email: email }).lean();
  if (user) {
    bcrypt.compare(password, user.password, (err, equalPassword) => {
      if (equalPassword) {
        const token = jwt.sign(
          { _id: user._id, email: email },
          secret.secret,
          {}
        );
        return res.status(200).json({ token });
      } else {
        return res.status(401).json({ message: "Senha incorreta!" });
      }
    });
  } else {
    return res.status(401).json({ message: "Usuário não cadastrado!" });
  }
});

/* Cadastrar */
router.post("/cadastrar", async (req, res) => {
  const { body = {} } = req;
  const { name, surname, password, email } = body;
  const checkEmail = await User.findOne({ email: email });

  if (!email)
    return res.status(401).json({ message: "Digite um email valido!" });
  if (!password || password.length < 5)
    return res
      .status(401)
      .json({ message: "Digite uma senha com 5 caracteres ou mais " });

  if (checkEmail) {
    return res
      .status(401)
      .json({ message: "Email em uso, escolha outro email para se cadastrar" });
  }
  try {
    const response = await User.create({
      name,
      surname,
      password,
      email,
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
  const { body = {} } = req;
  const {
    name,
    surname,
    password,
    email,
    address,
    cpf,
    zip,
    city,
    number,
    complement,
  } = body;
  const checkEmail = await User.findOne({ email: email });
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
  if (checkEmail) {
    return res
      .status(401)
      .json({ message: "Email em uso, escolha outro email para se cadastrar" });
  }
  try {
    const response = await User.findByIdAndUpdate(req.params._id, {
      name,
      surname,
      password,
      address,
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
    return res.json({ message: "Atualizado com sucesso " });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Erro ao editar usuário  " });
  }
});

/* Recieve users data */
router.get("/user/:_id", auth, async (req, res) => {
  const { _id } = req.params;
  try {
    const response = await User.findById({ _id }).lean();
    if (response) return res.status(200).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao editar!" });
  }
});

router.delete("/user/:_id", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params._id).lean();
    return res.status(200).json({ message: "Deletado com sucesso !" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao deletar usuário!" });
  }
});
module.exports = (app) => app.use("/", router);
