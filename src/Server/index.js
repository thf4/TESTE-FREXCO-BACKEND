const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Frexco", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
