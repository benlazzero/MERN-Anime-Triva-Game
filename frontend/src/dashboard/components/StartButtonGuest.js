import React from 'react';

import './StartButton.css';

const StartButton = () => {
  return (
    <div className="start-wrapper">
      <a href="/game/guest">
        <p>Start Game</p>
      </a>
    </div>
  );
};

export default StartButton;
