
const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/camas", function(req, res) {
  res.render("camas", { link });
});

module.exports = router;