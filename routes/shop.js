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
// const path = require('path');

// const express = require('express');

// const productsCtroller = require('../controllers/products');

// // const rootDir = require('../util/path');  //using the logic in conttroler tai amader agolo lagbe na
// // const adminData = require('./admin');

// const router = express.Router();

// router.get('/', productsCtroller.getProducts);

// module.exports = router;



const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/product/:productId');

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
