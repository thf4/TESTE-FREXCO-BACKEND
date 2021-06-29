const express = require("express");
const app = express();
const product = require("./src/Routers/productRoute");
const cart = require("./src/Routers/cartRoute");

/* Midllewares */
require("./src/MIddlewares/cors");

/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Rotas */
app.use("/", product);
app.use("/", cart);
require("./src/Routers/router")(app);
app.listen(3000);
