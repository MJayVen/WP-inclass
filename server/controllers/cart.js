const express = require('express');

const app = express.Router();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/:userId', (req, res) => {
    res.send(get(req.params.userId));
});

app.post('/:userId/:productId/:quantity', (req, res) => {
    res.send(add(req.params.productId, req.params.userId, req.params.quantity));
});

app.delete('/:userId/:productId', (req, res) => {
    res.send(remove(req.params.userId, req.params.productId));
});

module.exports = app;