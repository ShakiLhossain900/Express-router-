// const path = require("path");
// const express = require("express");
// const rootDir = require("../util/path");
// const adminData = require("./admin");

// const router = express.Router();

// router.get("/", (req, res, next) => {
//   // console.log(adminData.products);
//   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

//   // for the pug express js kiso change korece
//   const products = adminData.products;
//   res.render("shop", { prods: products, docTitle: "Shop", path: "/" }); //ata auto shop.pug ke niye nibe output y
// });

// module.exports = router;



//shop js copy from max
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
