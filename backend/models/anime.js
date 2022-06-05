const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeSchema = new Schema({
  anime: String,
  character: String,
  quote: { type: String, required: true },
});

module.exports = mongoose.model('Anime', animeSchema);
