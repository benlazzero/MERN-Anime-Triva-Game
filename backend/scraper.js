//const animes = require('../anime.json');
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const Anime = require('./models/anime');


const Scrape = (req, res, next) => {
  // for anime movie
  const aniRegExp = /\(([^)]+)\)/;
  // for character
  const charRegExp = /\([^()]*\)/g;

  axios('https://www.goalcast.com/anime-quotes/')
    .then(res => {
      const htmlData = res.data;
      const $ = cheerio.load(htmlData);
      const quotes = [];
      const animes = [];
      const characters = [];

      $('.wp-block-quote', htmlData).each((index, element) => {
        const quote = $(element).children('p').text();
        const cite = $(element).children('cite').text();
        const character = cite.replace(charRegExp, ''); 

        quotes.push(quote);
        characters.push(character.slice(0, -1));
        animes.push(aniRegExp.exec(cite)[1]);
      })
      // send to mongodb
      for (let i = 0; i < 103; i++) {
        let newAnime = new Anime({
          anime: animes[i],
          character: characters[i],
          quote: quotes[i],
        });
        newAnime.save();
      }
    })
  next();
};

module.exports = Scrape;
