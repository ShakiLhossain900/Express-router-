const express = require("express");

const router = express.Router();

//  /admin/add-product => GET request user input dibe /admin akhane check korbe na karon ata app y /admin hoye akhan thake /add-product will only take
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

//  /admin/add-product => Post request user ouput pabe like fb post er moto
router.post("/add-product", (req, res, next) => {
  console.log(req.body);   //user get y jei input ta diyece amara post y ata pabu
  res.redirect("/");
});

module.exports = router;

//using express routing is done
