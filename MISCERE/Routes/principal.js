
const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/principal", function(req, res) {
  const nombre = req.session.user ? req.session.user.nombre : "Invitado";
  res.render("principal", { name: nombre, link });
});

module.exports = router;