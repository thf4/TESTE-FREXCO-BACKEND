const express = require("express");
const router = express.Router();
const auth = require("../MIddlewares/auth");

/* listen Products */
router.get("/product",auth, (req, res) => {
  return res.json({ message: "Bienvenidos a la produtos del mundo" });
});
module.exports = router;
