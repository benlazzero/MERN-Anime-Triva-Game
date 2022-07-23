import React from 'react';

import './Game.css';
import FetchTrivia from '../components/FetchTrivia';

const Game = () => {
  
  return (
    <div className="main-trivia-wrapper">
      <h3>Name that anime...</h3>
      <FetchTrivia />
    </div>
  )
};

export default Game;
