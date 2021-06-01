const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
  return res.json({ message: "Bienvenidos a la produtos del mundo" });
});
module.exports = router;
