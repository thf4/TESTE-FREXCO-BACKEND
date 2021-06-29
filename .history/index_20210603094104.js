const express = require("express");
const app = express();
const product = require("./src/Routers/productRoute");
const cart = require("./src/Routers/cartRoute");

/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Midllewares */
require("./src/MIddlewares/cors")(app);

/* Rotas */
app.use("/", product);
app.use("/", cart);
require("./src/Routers/router")(app);
app.listen(3000);
