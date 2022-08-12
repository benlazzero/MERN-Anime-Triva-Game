import React from 'react';
import { Link } from 'react-router-dom';

import './StartButton.css';

const StartButton = () => {
  return (
      <Link className="nav-link active" to="/game/guest">
        Start Game
      </Link>
  );
};

export default StartButton;
