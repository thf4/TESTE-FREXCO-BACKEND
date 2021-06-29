const express = require("express");
const app = express();
const product = require("./Routers/productRoute");

/* Midllewares */
require("./MIddlewares/cors");

/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Rotas */
app.use("/", product);
require("./Routers/router")(app);
app.listen(3000);
