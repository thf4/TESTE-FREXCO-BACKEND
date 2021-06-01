const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:3000/Frexco", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
