const express = require("express");
const router = express.Router();

router.put("/user/:_id", async (req, res) => {
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
  if (!/([0-9]{2}[0-9]{3}-[0-9]{3}$)/.test(zip)) {
    return res.status(401).json({ message: "Digite um cep valido " });
  }

  try {
    const response = await User.findOneAndUpdate(
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
    const hash = bcrypt.hashSync(password, 10);
    response.password = hash;
    response.save();
    return res.json({ message: "Atualizado com sucesso " });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Erro ao editar usuário  " });
  }
});

module.exports = (app) => app.use("/", router);
