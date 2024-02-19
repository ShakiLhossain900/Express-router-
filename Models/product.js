// const products =[];
const { log } = require("console");
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
        let products = [];
        if(!err){
            products = JSON.parse(fileContent);
        }
        products.push(this);
    });
  }

  static fetchAll() {
    return products;
  }
};
