var express = require('express');
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


router.get("/", function (req, res) {
    res.render("landing");
});

router.get("/register", function (req, res) {
    res.render("register");
});

//handle sign up logic
router.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            req.flash("error", err);
            return res.render("register");
        }
        passport.authenticate('local')(req, res, function () {
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});


//shows login form
router.get("/login", function (req, res) {
    res.render("login");
});

//handle login logic
//middleware
router.post("/login", passport.authenticate('local', {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function (req, res) {

});

//logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/campgrounds");
});


module.exports = router;