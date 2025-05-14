
const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/perfil", function(req, res) {
  res.render("perfil", { link });
});

module.exports = router;