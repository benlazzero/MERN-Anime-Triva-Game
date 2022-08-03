import React, { useState, useEffect } from 'react';

import AnswerButtons from './Answer-Buttons';

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
      <div className="card">
        <div className="card-body text-center">
          <p className="fs-1 fw-bold">{quote.quote}</p>
          <p className="fs-3 fst-italic">{quote.character}</p>
        </div>
        <AnswerButtons reload={toggler} randAnswers={[quote.anime, quote.wrong1, quote.wrong2, quote.wrong3]} />
      </div>
  );
};

export default GetRandomQuote;
