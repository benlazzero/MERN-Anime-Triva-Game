import React from 'react';

import './Stats.css';
import TestFetch from '../../shared/components/TestFetch';

const Stats = () => {
  return (
    <div className="stats-wrapper">
      <h1>Your Stats</h1>
      <span>Login to view stats</span>
      <TestFetch />
    </div>
  );
};

export default Stats;
