import React from 'react';

import './TopPlayers.css';

const TopPlayers = () => {
  return (
    <div className="content-wrapper">
      <h1>Top Players</h1>
      <div className="list-wrapper">
        <ol className="usernames">
          <li>tester</li>
        </ol>
        <ul className="scores">
          <li>20/34</li>
        </ul>
      </div>
    </div>
  );
};

export default TopPlayers;
