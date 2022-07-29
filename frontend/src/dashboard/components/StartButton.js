import React from 'react';

import './StartButton.css';
import folderImage from '../../public/folder.png';

const StartButton = () => {
  return (
    <div className="start-wrapper">
      <a href="/game">
        <img src={folderImage} width="64px" height="64px" />
        <p>Start Game</p>
      </a>
    </div>
  );
};

export default StartButton;
