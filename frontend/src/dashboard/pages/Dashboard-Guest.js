import React from 'react';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButtonGuest from '../components/StartButtonGuest';

import './Dashboard.css';

const DashboardGuest = () => {

  return (
    <div className="dash-bg-color">
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div class="container-fluid gx-5">
          <span className="navbar-brand mb-0 h1 font-monospace">NameTheAnime</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gy-5 drop-down-nav" id="navbarNav">
            <ul className="navbar-nav float-end text-end">
              <li className="nav-item">
                <StartButtonGuest />
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">Login</a>
              </li>
            </ul>
        </div>
        </div>
      </nav>
        <div>
          <div>
          </div>
          <div className="content-bg-dash">
            <TopPlayers />
            <Stats />
          </div>
        </div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-center align-items-center py-3">
          <div class="d-flex align-items-center">
            <a href="https://github.com/benlazzero/AniCharTrivia" class="me-2 mb-md-0 text-muted lh-1">
              github
            </a>
            <span class="text-muted">2022 Ben Lazzeroni</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardGuest;
