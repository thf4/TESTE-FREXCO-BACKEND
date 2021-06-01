const express = require("express");
const app = express();
const product = require("./Routers/product");

/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Midllewares */
require("./MIddlewares/cors");

/* Rotas */
app.use("/loja", product);
require("./Routers/router")(app);
app.listen(3000);
