const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../models/user');

router.get("/login/success", (req, res) => {
  console.log(req.user ? "login success" : "fails login suceess");
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
  console.log(req.user);
  if (req.user !== undefined) {
    console.log(req.user._json.email);
    let userEmail = (req.user._json.email);
    User.findOne({ email: userEmail }, function (err, user) {
      res.json({ user: user});
    });
  }
});

router.get('/google/callback', passport.authenticate("google", {
    failureRedirect: '/auth/login/failed',
    prompt: 'select_account'
  }),
    function (req, res, next) {
      console.log("google/callbkck going first" + req.user);
      User.findOne({ email: req.user._json.email }, function (err, user) {
        if (user === null) {
          let newUser = new User({ 
            email: req.user._json.email,
            username: 'null',
            score: 0,
            total: 0,
          })
          newUser.save(function (err, user) {
            console.log("in save block");
            if (err) {
              console.log("there was an error in save block" + err)
            } else {
              console.log(user.email + " was saved to mongoDB.");
            }
          });
          console.log('this is user bullshit');
        } else if (user != null && req.user._json.email_verified === true) {
          console.log(req.user._json.email + " already exists.");
        }
        User.findOne({ email: req.user._json.email }, function (err, user) {
          console.log("coming from auth" + user);
          if (user === null) {
            res.redirect('http://localhost:3000/create');
          } else {
            if (user.username === 'null') {
              res.redirect('http://localhost:3000/create');
            }
            res.redirect('http://localhost:3000/dashboard');
          }
        });
      });

});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.delete("/logout", (req, res) => {
    console.log(req.session);
    req.session.destroy((err) => {
      if (err) throw err;
      res.clearCookie("session-id");
    })
    req.logout();
})

module.exports = router