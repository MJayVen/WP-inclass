const express = require('express');
// note, when writing require without "./" at beginning, automatically looks in node module
const products = require('../models/products');

// treated almost identically to app from index.js. the difference? i dont know :P
const app = express.Router();

app
    .get('/', (req, res) => {
        res.status(200).send(products.getProducts());
    })
    .get('/:id', (req, res) => {
        const product = products.getProduct(+req.params.id);
        if (product) {
            res.status(200).send(product);
        } else {
            res.sendStatus(404);
        }
    })

module.exports = app;