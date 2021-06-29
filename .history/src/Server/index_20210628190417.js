const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Frexco", {
 useNewUrlParser: true,
});

module.exports = mongoose;
