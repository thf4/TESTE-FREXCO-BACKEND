const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:3000/Frexco", {
  useFindAndModify: true,
  useNewUrlParser: true,
});
