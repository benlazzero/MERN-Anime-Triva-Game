import React from 'react';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';

const DashboardGuest = () => {

  

  return (
    <div className="dash-wrapper">
      <TopPlayers />
      <Stats />
      <StartButton />
      <a href="/">back to login</a>
    </div>
  );
};

export default DashboardGuest;
