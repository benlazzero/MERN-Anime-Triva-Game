import React from 'react';

import folderImage from '../../public/folder.png';

import './StartButton.css';

const StartButton = () => {
  return (
    <div className="start-wrapper">
      <a href="/game/guest">
        <img src={folderImage} width="64px" height="64px" />
        <p>Start Game</p>
      </a>
    </div>
  );
};

export default StartButton;
