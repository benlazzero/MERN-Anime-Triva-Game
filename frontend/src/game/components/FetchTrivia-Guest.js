import React, { useState, useEffect } from 'react';

import AnswerButtonsGuest from './Answer-Buttons-Guest';

const GetRandomQuote = () => {
  const [quote, setQuote] = useState('loading...');
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(() => setToggle(!toggle));
  }

  useEffect(() => {
    console.log('useEffect is running');
    fetch('http://localhost:4000/api/game')
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(err => {
        console.log(err)
      })
  }, [toggle]); 

  return (
    <div>
      <p>{quote.quote}</p>
      <p>{quote.character}</p>
      <h3>Answers Below</h3> 
      <hr />
      <AnswerButtonsGuest reload={toggler} randAnswers={[quote.anime, quote.wrong1, quote.wrong2, quote.wrong3]} />
    </div>
  );
};

export default GetRandomQuote;
