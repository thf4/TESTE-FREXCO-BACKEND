const mongoose = require("../Server/index");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  birthday: {
    type: String,
    require: true,
  },
  adress: {
    type: String,
    require: true,
  },
  zip: {
    type: String,
    require: true,
  },
  number: {
    type: String,
    require: true,
  },
  complement: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", UsersSchema);

module.exports.User;
