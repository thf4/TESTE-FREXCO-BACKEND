const express = require("express");
const app = express();

require("./MIddlewares/cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./Routers/router")(app);
app.listen(3000);
