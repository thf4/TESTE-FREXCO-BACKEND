const mongoose = require("mongoose");

mongoose.connect("mongodb://db:27017/Frexco", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
