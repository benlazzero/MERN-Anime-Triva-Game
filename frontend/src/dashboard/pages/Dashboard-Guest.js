import React from 'react';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButtonGuest from '../components/StartButtonGuest';

const DashboardGuest = () => {

  return (
    <div className="dash-wrapper">
      <TopPlayers />
      <Stats />
      <StartButtonGuest />
      <a href="/">back to login</a>
    </div>
  );
};

export default DashboardGuest;
