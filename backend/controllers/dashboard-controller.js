const express = require('express');

const User = require('../models/user');

const getTopPlayers = async (req, res, next) => {
  let player;
  try {
    player = await User.find().sort({score: -1}); 
  } catch (err) {
    console.log(err);
    return next(err);
  }
  res.json({ player });
};

exports.getTopPlayers = getTopPlayers;
