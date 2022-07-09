import React from 'react';

import GetTopPlayers from '../../shared/components/GetTopPlayers';
import './TopPlayers.css';

const TopPlayers = () => {
  return (
    <div className="content-wrapper">
      <div className="tool-bar">
      </div>
      <div className="players">
        <div className="player-bar">
          <h1>Top Players</h1>
        </div>
        <div className="showPlayers">
          <GetTopPlayers />
        </div>
      </div>
    </div>
  );
};

export default TopPlayers;
