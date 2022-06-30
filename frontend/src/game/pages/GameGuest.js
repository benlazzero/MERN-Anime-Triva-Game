import React from 'react';

import './Game.css';
import FetchTriviaGuest from '../components/FetchTrivia-Guest';

const Game = () => {
  
  return (
    <div>
      <h3>Name that anime...</h3>
      <FetchTriviaGuest />
    </div>
  )
};

export default Game;
