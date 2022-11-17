// ts-check
const express = require('express');
const { get, add, update } = require('../models/cart');

const app = express.Router();

app.post('/:userId/:productId/:quantity', (req, res) => {
    res.send(add(req.params.userId, +req.params.productId, +req.params.quantity));
});

app.get('/:userId', (req, res) => {
    res.send(get(req.params.userId));
});

app.patch('/:userId/:productId/:quantity', (req, res) => {
    res.send(update(req.params.userId, +req.params.productId, +req.params.quantity));
});

module.exports = app;