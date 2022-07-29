const express = require('express');

const User = require('../models/user');

const removeUser = (req, res) => {
  const userEmail = req.user._json.email;

  User.deleteOne({ email: userEmail }).then(function() {
    console.log("delete success");
  }).catch(function(error) {
    console.log(error);
  });
  res.redirect('http://localhost:3000');
} 

const resetUser = async (req, res) => {
  const userName = req.body.user.user.data.user.email;
  const userEmail = { email: userName };
  const update = { score: 0, total: 0 };
  console.log('in put request block');

  let doc = await User.findOneAndUpdate(userEmail, update); 
  res.end();
}

exports.removeUser = removeUser;
exports.resetUser = resetUser;