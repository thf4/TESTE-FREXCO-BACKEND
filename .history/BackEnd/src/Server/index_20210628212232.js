const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb://${process.env.MONGODB}/Frexco`, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 user: process.env.MONGODB_USER,
 pass: process.env.MONGODB_PASS
});

module.exports = mongoose;
