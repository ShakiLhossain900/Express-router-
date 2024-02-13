const path = require('path');
const express = require("express");
const rootDir = require('../util/path');

const router = express.Router();

const products = []; //

//  /admin/add-product => GET request user input dibe /admin akhane check korbe na karon ata app y /admin hoye akhan thake /add-product will only take
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));  //__dirname get the file of this folder diye bojay
});

//  /admin/add-product => Post request user ouput pabe like fb post er moto
router.post("/add-product", (req, res, next) => {
  console.log(req.body);   //user get y jei input ta diyece amara post y ata pabu
  
  res.redirect("/");
});

//module.exports = router;

