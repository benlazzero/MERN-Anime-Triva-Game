import React from 'react';

import './Stats.css';

const Stats = (props) => {
  return (
    <div className="card w-100 bg-light m-auto mt-4 text-center border-0 playerstop align-items-center">
      <div className="fs-1 fw-bold mt-3">
        Your Stats
      </div>
      <div className="card-body w-100 user-stats-wrapper">
        { props.score !== undefined ? <li className="d-flex list-group-item user-stats-item"><span className="fw-bold">{props.rank}</span> <span className="top-players-name font-monospace">{props.username}</span><span className="ms-auto font-monospace">{props.score}/{props.total}</span></li> : <span>Offline</span> }
      </div>
    </div>
  );
};

export default Stats;
