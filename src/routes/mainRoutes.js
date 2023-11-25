const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/home', mainControllers.home);
router.get('/contact', mainControllers.contact);
router.get('/about', mainControllers.about);
router.get('/faq', mainControllers.faq);

module.exports = router;
