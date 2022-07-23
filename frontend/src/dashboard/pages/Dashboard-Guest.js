import React from 'react';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButtonGuest from '../components/StartButtonGuest';
import folderImage from '../../public/folder.png';

import './Dashboard.css';

const DashboardGuest = () => {

  return (
    <div className="html-wrapper">
      <div className="main-wrapper">
        <p className="domain">NameTheAnime.com</p>
        <div className="bg-wrapper">
          <div className="header">
            <div className="header-content">
              <a className="header-link" href="/">
                <img src={folderImage} width="64px" height="64px"/>
                <p>Back To Login</p>
              </a>
              <StartButtonGuest />
            </div>
          </div>
          <div className="dash-wrapper">
            <TopPlayers />
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGuest;
