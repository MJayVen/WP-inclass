const express = require("express");
// note, when writing require without "./" at beginning, automatically looks in node module
const products = require("../models/products");

// treated almost identically to app from index.js. the difference? i dont know :P
const app = express.Router();

app
  .get("/", (req, res) => {
    products
      .getProducts()
      .then((data) => res.status(200).send(data))
      .catch(next);
  })
  .get("/:id", (req, res) => {
    const product = products.getProduct(+req.params.id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send("Product not found");
    }
  })
  .post("/seed", (req, res, next) => {
    products
      .seed()
      .then((data) => res.status(200).send(data))
      .catch(next);
  });

module.exports = app;
