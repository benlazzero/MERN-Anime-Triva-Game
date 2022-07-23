import React from 'react';

import './Game.css';
import FetchTriviaGuest from '../components/FetchTrivia-Guest';
import logo from '../../public/logo2.png';

const Game = () => {
  
  return (
    <div className="main-trivia-wrapper">
      <div className="fake-webpage">
        <div className="tab-bar">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="tab-fake">
            <img src={logo} />
            <p>nametheanime.com</p>
          </div>
        </div>
        <div className="address-bar">
        <p>B</p>
        <p>F</p>
        <p>R</p>
          <div className="input-bar">
            <p>https://nametheanime.com/</p>
          </div>
        </div>
        <div className="trivia-bg">
          <FetchTriviaGuest />
        </div>
      </div>
    </div>
  )
};

export default Game;
