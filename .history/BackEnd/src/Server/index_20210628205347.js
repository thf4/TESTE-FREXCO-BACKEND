const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb://${process.env.MONGODB}/Frexco`, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

module.exports = mongoose;
