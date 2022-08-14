import React, { useState, useEffect } from 'react';

import AnswerButtonsGuest from './Answer-Buttons-Guest';

const GetRandomQuote = () => {
  const [quote, setQuote] = useState('loading...');
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(() => setToggle(!toggle));
  }


  useEffect(() => {
    fetch('http://localhost:4000/api/game')
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(err => {
        console.log(err)
      })
  }, [toggle]); 

  return (
      <div className="card border-0 game-bg-area">
        <div className="card-body w-75 m-auto">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="fs-1 fw-bold">{quote.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <p className="fs-3 fst-italic">{quote.character}</p>
            </figcaption>
          </figure>
        </div>
        <AnswerButtonsGuest reload={toggler} randAnswers={[quote.anime, quote.wrong1, quote.wrong2, quote.wrong3]} />
      </div>
  );
};

export default GetRandomQuote;
