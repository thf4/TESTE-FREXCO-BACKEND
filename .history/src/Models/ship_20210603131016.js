const mongoose = require("../Server/index");

const ShipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
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

const Ship = mongoose.model("Ship", ShipSchema);

module.exports = Ship;
