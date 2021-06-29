const express = require("express");
const app = express();
const product = require("./src/Routers/productRoute");
const cart = require("./src/Routers/cartRoute");
const ship = require("./src/Routers/shipping");
/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Midllewares */
require("./src/MIddlewares/cors")(app);

/* Rotas */
app.use("/", product);
app.use("/", cart);
app.use("/", ship);

require("./src/Routers/router")(app);
app.listen(3000);
