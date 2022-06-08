import React, { useState, useEffect } from 'react';

import AnswerButtons from './Answer-Buttons';

const GetRandomQuote = () => {
  const [quote, setQuote] = useState('loading...');

  useEffect(() => {
    fetch('http://localhost:4000/api/game')
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(err => {
        console.log(err)
      })
  }, []); 

  return (
    <div>
      <p>{quote.quote}</p>
      <p>{quote.character}</p>
      <h3>Answers Below</h3> 
      <hr />
      <AnswerButtons newTrvia={GetRandomQuote} randAnswers={[quote.anime, quote.wrong1, quote.wrong2, quote.wrong3]} />
    </div>
  );
};

export default GetRandomQuote;
