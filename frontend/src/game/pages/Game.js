import React from 'react';

import './Game.css';
import FetchTrivia from '../components/FetchTrivia';

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
          <FetchTrivia />
        </div>
      </div>
    </div>
  )
};

export default Game;
