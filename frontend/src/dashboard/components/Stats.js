import React from 'react';

import './Stats.css';

const Stats = (props) => {
  return (
    <div className="card border-secondary w-50 shadow-sm m-auto mt-4">
      <div className="card-header bg-dark text-white text-center fs-1">
        Your Stats
      </div>
      <div className="card-body m-auto">
        { props.score !== undefined ? <span className="fs-4">{props.score} / {props.total}</span> : <span className="fs-4">Offline</span> }
      </div>
    </div>
  );
};

export default Stats;
