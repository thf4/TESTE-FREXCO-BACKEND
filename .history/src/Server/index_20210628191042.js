const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Frexco", {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

module.exports = mongoose;
