import React from 'react';

import './Stats.css';

const Stats = (props) => {
  return (
    <div className="stats-wrapper">
      <div className="stats">
        <p>Stats</p>
        { props.score !== undefined ? <span>{props.score} / {props.total}</span> : <span>Offline</span> }
      </div>
    </div>
  );
};

export default Stats;
