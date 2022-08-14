const express = require('express');
const User = require('../models/user');

const updateScore = async(req, res) => { 
  let userInfo =  await req.user;
  let score = req.body.score;
  let total = req.body.total;
  if (userInfo !== undefined) {
    User.findOne({ email: req.user._json.email }, function (err, result) {
      let currentScore = +result.score + +score;
      let currentTotal = +result.total + +total;
      let update = { score: currentScore, total: currentTotal }; 
      User.findOneAndUpdate({ email: req.user._json.email }, update, function (err, result) {
       if (err) {
         console.log(err);
       }
      }); 
    })
  }
  res.end();
  };   
  
exports.updateScore = updateScore;