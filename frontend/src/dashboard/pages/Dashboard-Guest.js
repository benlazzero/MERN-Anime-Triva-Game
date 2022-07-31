import React from 'react';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButtonGuest from '../components/StartButtonGuest';

import './Dashboard.css';

const DashboardGuest = () => {

  return (
    <div>
      <div>
        <p>NameTheAnime.com</p>
        <div>
          <div>
            <div>
              <a href="/">
                <p>Back To Login</p>
              </a>
              <StartButtonGuest />
            </div>
          </div>
          <div>
            <TopPlayers />
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGuest;
