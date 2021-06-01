const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
  return res.json({ message: "Bien venido a la produtos del mundo" });
});
module.exports = router;
