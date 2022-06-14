const express = require('express');

const User = require('../models/user');

const addUsername = (req, res) => {
  let userEmail = { email: req.body.email};
  let username = { username: req.body.name };

  User.findOne(userEmail, function (err, user) {
    if (user.username === 'null') {
      User.findOneAndUpdate(userEmail, username, function (err, result) {
        console.log(result);
      });  
      console.log('user was updated');
    } else {
      res.redirect('http://localhost:3000/')
    }
  });  



  
  
  
};

exports.addUsername = addUsername;