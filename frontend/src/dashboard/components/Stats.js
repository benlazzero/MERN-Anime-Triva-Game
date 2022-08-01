import React from 'react';

import './Stats.css';

const Stats = (props) => {
  return (
    <div className="card w-100 bg-light m-auto mt-4 text-center border-0 playerstop">
      <div className="fs-1 fw-bold mt-3">
        Your Stats
      </div>
      <div className="card-body w-50 m-auto user-stats">
        { props.score !== undefined ? <li className="mb-0 text-start fs-5 list-group-item">{props.rank}. {props.username}<span className="float-end">{props.score}/{props.total}</span></li> : <span className="fs-4">Offline</span> }
      </div>
    </div>
  );
};

export default Stats;
