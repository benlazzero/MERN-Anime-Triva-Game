const express = require('express');

const User = require('../models/user');

const addUsername = (req, res) => { 
  let userEmail = { email: req.body.user.user.email};
  let username = { username: req.body.name };

  User.findOne(userEmail, function (err, user) {
    if (user.username === 'null') {
      User.findOneAndUpdate(userEmail, username, function (err, result) {
      });  
      console.log('user was updated');
    } else {
      console.log('user already set username');
    }
  });   
  
};

exports.addUsername = addUsername;