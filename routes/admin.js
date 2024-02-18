// const path = require("path");
// const express = require("express");
// const rootDir = require("../util/path");

// const router = express.Router();

// const products = []; //

// //  /admin/add-product => GET request user input dibe /admin akhane check korbe na karon ata app y /admin hoye akhan thake /add-product will only take
// router.get("/add-product", (req, res, next) => {
//   //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));  //__dirname get the file of this folder diye bojay
//   res.render("add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     formsCSS: ture,
//     productCSS: ture,
//     activeAddProduct: true,
//   }); //amara view the path pathabu amader running path ki ache dekar jonnu
// });
 
// //  /admin/add-product => Post request user ouput pabe like fb post er moto
// router.post("/add-product", (req, res, next) => {
//   //console.log(req.body);   //user get y jei input ta diyece amara post y ata pabu

//   products.push({ title: req.body.title });

//   res.redirect("/");
// });

// //module.exports = router;

// exports.routes = router;
// exports.products = products;





// the admin copy from max

const path = require('path');

const express = require('express');

const productsCtrollers =require('../controllers/products');

// const rootDir = require('../util/path'); //controller add korar karone ata lagbe na


const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', productsCtrollers.getAddProduct); //

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;

