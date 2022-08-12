import React from 'react';

import GetTopPlayers from '../../shared/components/GetTopPlayers';

import './TopPlayers.css';

const TopPlayers = () => {
  return (
      <div className="card w-100 m-auto text-center border-0 playerstop p-4">
        <div>
          <div>
            <div className="fs-1 fw-bold">
              Leaderboard
            </div>
            <div className="card-body m-auto top-players-list">
              <GetTopPlayers />
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopPlayers;
