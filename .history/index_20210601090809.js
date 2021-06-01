const express = require("express");
const app = express();

/* Midllewares */
require("./MIddlewares/cors");

/* Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Rotas */
require("./Routers/router")(app);
app.listen(3000);
