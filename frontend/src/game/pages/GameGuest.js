import React from 'react';

import './Game.css';
import FetchTriviaGuest from '../components/FetchTrivia-Guest';

const Game = () => {
  
  return (
    <div>
      <div>
        <div>
          <div>
            <p>https://nametheanime.com/</p>
          </div>
        </div>
        <div>
          <FetchTriviaGuest />
        </div>
      </div>
    </div>
  )
};

export default Game;
