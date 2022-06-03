const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  score: Number,
  total: Number,
});

module.exports = mongoose.model('User', userSchema);
