const express = require('express');
const router = express.Router();

// Muestra la página home
router.get('/register', function(req, res) {
    res.render('register');
});

router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;