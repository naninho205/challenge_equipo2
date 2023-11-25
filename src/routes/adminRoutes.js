const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('route for admin view')
});

router.get('/create', (req, res) => {
    res.send('route for create an item view')
});

router.post('/create', (req, res) => {
    res.send('route for adding an item to the database')
});

router.get('/edit/:id', (req, res) => {
    res.send('route for edit an item view')
});

router.put('/edit/:id', (req, res) => {
    res.send('route for updating an item')
});

router.delete('/delete/:id', (req, res) => {
    res.send('route for deleting an item')
});

module.exports = router;
