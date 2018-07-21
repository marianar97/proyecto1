const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const assert = require('assert');

let url = 'mongodb://localhost:27017/sampsite';


// Muestra la página home
router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;