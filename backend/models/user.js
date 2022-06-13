const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }, 
  userName: String,
  score: Number,
  total: Number,
});

module.exports = mongoose.model('User', userSchema);
