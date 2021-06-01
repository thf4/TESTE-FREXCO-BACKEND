const mongoose = require("../Server/index");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  city: {
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
  password: {
    type: String,
    require: true,
  },
  date: {
    default: date(Date()),
  },
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;
