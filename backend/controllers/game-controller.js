const Anime = require('../models/anime');

const randomAnime = async (req, res, next) => {
  const wrongAnswers = [];
  const randomSelection = Math.floor(Math.random() * 103);
  const doc = await Anime.findOne().skip(randomSelection);

  while (wrongAnswers.length < 3) {
    let randomWrong = Math.floor(Math.random() * 103);
    let wrong = await Anime.findOne().skip(randomWrong);

    if (wrong.anime !== doc.anime && !wrongAnswers.includes(wrong.anime)) {
      wrongAnswers.push(wrong.anime);
    }
  }

  res.json({quote: `${doc.quote}`, character: `${doc.character}`, 
    anime: `${doc.anime}`, wrong1: `${wrongAnswers[0]}`, wrong2: `${wrongAnswers[1]}`, 
    wrong3: `${wrongAnswers[2]}`}); 
};

exports.randomAnime = randomAnime;
