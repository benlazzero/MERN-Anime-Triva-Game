const express = require('express');
const User = require('../models/user');

const updateScore = (req, res) => { 
  let score = req.body.score;
  let total = req.body.total;
  console.log(score);
  console.log(total);
  if (req.user !== undefined) {
    console.log(req.user._json.email);
    User.findOne({ email: req.user._json.email }, function (err, result) {
      let currentScore = +result.score + +score;
      let currentTotal = +result.total + +total;
      let update = { score: currentScore, total: currentTotal }; 
      User.findOneAndUpdate({ email: req.user._json.email }, update, function (err, result) {
       console.log(result); 
       if (err) {
         console.log(err);
       }
      }); 
    })
  }

  res.send('hi');
  };   
  

exports.updateScore = updateScore;