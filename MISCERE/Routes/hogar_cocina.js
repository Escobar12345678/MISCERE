
const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/hogar_cocina", function(req, res) {
  res.render("hogar_cocina", { link });
});

module.exports = router;
