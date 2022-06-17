import React from 'react';

import './Stats.css';

const Stats = (props) => {
  return (
    <div className="stats-wrapper">
      { console.log(props.score) }
      <h1>Your Stats</h1>
      { props.score !== undefined ? <span>{props.score} / {props.total}</span> : <span>login to view stats</span> }
    </div>
  );
};

export default Stats;
