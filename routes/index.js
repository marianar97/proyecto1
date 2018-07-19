const express = require('express');
const router = express.Router();

// Muestra la página home
router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;