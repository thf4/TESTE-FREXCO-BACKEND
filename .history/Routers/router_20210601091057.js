const express = require("express");
const router = express.Router();

/* Home */
router.get("/", (req, res) => {
  return res.json({ message: "Hello word" });
});

router.post("/login", (req, res) => {
  return res.json({ message: "Hello word" });
});

router.post("/cadastrar", (req, res) => {
  return res.json({ message: "Hello word" });
});

router.get("/cadastrar", (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);
