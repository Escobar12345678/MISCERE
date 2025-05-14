const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/",function(req,res){
  res.render("index",{link});
});

module.exports = router;
