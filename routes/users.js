const express = require('express');
const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, user.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});


router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
    function(req, res) {
        res.redirect('/');
    });

router.get('/logout', function(req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
});

// login
router.get('/index', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.render('index');
    res.redirect('/users/index');
});




var UserLocation = require('../models/location');


router.post('/location', function(req, res) {
    console.log("ENTRA AL LOG");
    var username = req.user.username;
    console.log(username);

});





module.exports = router;