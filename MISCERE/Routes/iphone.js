
const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/iphone", function(req, res) {
  res.render("iphone", { link });
});

module.exports = router;