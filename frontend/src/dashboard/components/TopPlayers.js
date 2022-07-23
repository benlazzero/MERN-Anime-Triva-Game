import React from 'react';

import GetTopPlayers from '../../shared/components/GetTopPlayers';
import exitimg from '../../public/x.png';
import miniimg from '../../public/minimize.png';
import windowimg from '../../public/window.png';

import './TopPlayers.css';

const TopPlayers = () => {
  return (
    <div className="content-wrapper">
      <div className="tool-bar">
        <img src={miniimg} />
        <img src={windowimg} />
        <img src={exitimg} />
      </div>
      <div className="players">
        <div className="player-bar">
          <p>Database</p>
          <div className="player-links">
            <p>Top Quotes</p>
            <p>Top Players</p>
            <p>Top Answers</p>
          </div>
        </div>
        <div className="showPlayers">
          <GetTopPlayers />
        </div>
      </div>
    </div>
  );
};

export default TopPlayers;
