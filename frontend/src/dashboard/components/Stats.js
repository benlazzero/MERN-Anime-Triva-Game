import React from 'react';

import './Stats.css';

const Stats = (props) => {
  return (
    <div className="card w-100 text-light m-auto mt-4 text-center border-0 align-items-center user-stats-box p-4">
      <div className="fs-1 fw-bold">
        Your Stats
      </div>
      <div className="card-body w-100 user-stats-wrapper">
        { props.score !== undefined ? <li className="d-flex list-group-item user-stats-item rounded"><span className="fw-bold">{props.rank}</span> <span className="top-players-name font-monospace">{props.username}</span><span className="ms-auto font-monospace">{props.score}/{props.total}</span></li> : <span>Please Login to view.</span> }
      </div>
    </div>
  );
};

export default Stats;
