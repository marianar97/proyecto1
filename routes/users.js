const express = require('express');
const router = express.Router();

let User = require('../models/user');


// Register
router.get('/register', function(req, res) {
    res.render('register');
});

// Login
router.get('/login', function(req, res) {
    res.render('login');
});

// Register User
router.post('/register', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    console.log(name);

    // Validación
    req.checkBody('name', 'El nombre es requerido').notEmpty();
    req.checkBody('email', 'El Email es requerido').notEmpty();
    req.checkBody('email', 'El Email es no válido').isEmail();
    req.checkBody('username', 'El username es requerido').notEmpty();
    req.checkBody('password', 'El password es requerido').notEmpty();
    req.checkBody('password2', 'Las contraseñas no son iguales').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        res.render('register', {
            errors: errors
        });
    } else {
        let newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        })

        User.createUser(newUser, function(err, user) {
            if (err) throw err
            console.log(user);
        });
        req.flash('success_msg', "Te registraste exitosamente");
        res.redirect('/users/login');
    }
});
module.exports = router;