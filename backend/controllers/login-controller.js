const axios = require('axios').default;

const displayQuote = async (req, res, next) => {
  let quote = await axios.get('https://animechan.vercel.app/api/random');
  console.log(quote.data);
  res.json({quote: `${quote.data.quote}`}); 
};

exports.displayQuote = displayQuote;
