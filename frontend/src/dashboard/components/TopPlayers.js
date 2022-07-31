import React from 'react';

import GetTopPlayers from '../../shared/components/GetTopPlayers';

import './TopPlayers.css';

const TopPlayers = () => {
  return (
      <div className="card w-50 m-auto mt-4 border-secondary shadow-sm text-center playerstop">
        <div>
          <div>
            <div className="card-header bg-dark text-white card-title fs-1">
              Top Players
            </div>
            <div className="card-body w-50 m-auto">
              <GetTopPlayers />
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopPlayers;
