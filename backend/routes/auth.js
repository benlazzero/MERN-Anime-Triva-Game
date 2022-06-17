const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../models/user');

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "login worked",
      user: req.user, 
    });
  } else {
    res.status(403).json({
      error: true,
      message: "not authorized",
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error:true,
    message: "something went wrong with the login",
  });
});

router.get("/user", (req, res) => {
  console.log(req.user._json.email);
  let userEmail = (req.user._json.email);
  User.findOne({ email: userEmail }, function (err, user) {
    res.json({ user: user});
  });
});

router.get('/google/callback', passport.authenticate("google", {
    failureRedirect: '/auth/login/failed'
  }),
    function (req, res, next) {
      console.log(req.user._json);
      User.findOne({ email: req.user._json.email }, function (err, user) {
        if (user === null) {
          let newUser = new User({ 
            email: req.user._json.email,
            username: 'null',
            score: 0,
            total: 0,
          })
          newUser.save(function (err, user) {
            if (err) {
              console.log(err)
            } else {
              console.log(user.email + " was saved to mongoDB.");
            }
          });
        } else if (user != null && req.user._json.email_verified === true) {
          console.log(req.user._json.email + " already exists.");
        }
        console.log("coming from auth" + user);
        if (user.username === 'null') {
          res.redirect('http://localhost:3000/create');
        } else {
          res.redirect('http://localhost:3000/dashboard');
        }
      });

});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/")
})

module.exports = router