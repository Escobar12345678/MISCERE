
const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/metodos-pago", function(req, res) {
  res.render("metodos-pago", { link });
});

module.exports = router;