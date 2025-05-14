const express = require('express');
const link = require("../JS/link");
const router = express.Router();

router.get("/inicio",function(req,res){
  if(!req.session.login){
    res.render("index",{link});
  }else{
    res.render("inicio", {datos: req.session, link});
  }
});

module.exports = router;
