import React from 'react';

import GetTopPlayers from '../../shared/components/GetTopPlayers';

import './TopPlayers.css';

const TopPlayers = () => {
  return (
      <div className="card w-100 bg-light m-auto mt-4 text-center border-0 playerstop">
        <div>
          <div>
            <div className="fs-1 fw-bold mt-3">
              Top Players
            </div>
            <div className="card-body w-50 m-auto top-players-list">
              <GetTopPlayers />
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopPlayers;
