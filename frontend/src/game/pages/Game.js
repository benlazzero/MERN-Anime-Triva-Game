import React from 'react';

import './Game.css';
import GetRandomQuote from '../../shared/components/GetRandomQuote';

const Game = () => {
  
  return (
    <div>
      <h3>Name that anime...</h3>
      <GetRandomQuote />
    </div>
  )
};

export default Game;
