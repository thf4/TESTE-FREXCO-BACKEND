const express = require("express");
const app = express();
const product = require("./Routers/productRoute");
const cart = require("./Routers/cartRoute");

/* Midllewares */
require("./MIddlewares/cors");

/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Rotas */
app.use("/", product);
app.use("/", cart);
require("./Routers/router")(app);
app.listen(3000);
