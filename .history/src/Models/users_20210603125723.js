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
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  zip: {
    type: Number,
    require: true,
  },
  number: {
    type: Number,
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
  telephone: {
    type: Number,
    require: true,
  },
  cellphone: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;
