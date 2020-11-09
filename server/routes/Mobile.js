const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "You are on the mobile page" });
});

router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;
