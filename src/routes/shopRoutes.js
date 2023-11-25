const express = require('express');
const router = express.Router();

router.get('/shop', (req, res) => {
    res.send('route for shop view')
});

router.get('/item/:id', (req, res) => {
    res.send(`route for find and retrieve a product from the id ${req.params.id}`)
});

router.post('/item/:id/add', (req, res) => {
    res.send('route for add the current item to the shop cart')
});

router.get('/cart', (req, res) => {
    res.send('route for cart view')
});

router.post('/cart', (req, res) => {
    res.send('route for got to checkout page')
});

module.exports = router;
