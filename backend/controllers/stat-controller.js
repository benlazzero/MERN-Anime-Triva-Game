const express = require('express');

const User = require('../models/user');

const getUserStats = async (req, res, next) => {
  let playerEmail;
  try {
    playerEmail = await req.user._json.email;
  } catch (err) {
    return;
  }

  let player;
  let userStats;

  try {
    player = await User.find().sort({score: -1}); 
  } catch (err) {
    console.log(err);
    return next(err);
  }
  // edit json to only show username and score and number
  // find what rank in ordered list the loggedin user is
  console.log(player.length);
  for(i = 0; i < player.length; i++) {
    if(playerEmail === player[i].email) {
      userStats = {
        "rank": i+1,
        "username": player[i].username,
        "score": player[i].score,
        "total": player[i].total,
      }
      break;
    }
  }

  res.json({ userStats });
};

exports.getUserStats = getUserStats;
