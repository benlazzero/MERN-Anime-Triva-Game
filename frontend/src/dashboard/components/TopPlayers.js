import React from 'react';

import GetTopPlayers from '../../shared/components/GetTopPlayers';
import './TopPlayers.css';

const TopPlayers = () => {
  return (
    <div className="content-wrapper">
      <h1>Top Players</h1>
        <GetTopPlayers />
    </div>
  );
};

export default TopPlayers;
