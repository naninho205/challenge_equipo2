const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('route for the login view')
});

router.post('/login', (req, res) => {
    res.send('route for logging in')
});

router.get('/register', (req, res) => {
    res.send('route for register view')
});

router.post('/register', (req, res) => {
    res.send('route for registering')
});

router.get('/logout', (req, res) => {
    res.send('route for logging out and returning home')
});

module.exports = router;
