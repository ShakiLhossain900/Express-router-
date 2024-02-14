const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');



const router = express.Router();

router.get('/',(req, res, next) =>{
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
 
    // for the pug express js kiso change korece 
    const products = adminData.products;
    res.render('shop', {prods : products, docTitle : 'Shop'}); //ata auto shop.pug ke niye nibe output y


});

module.exports = router;
 