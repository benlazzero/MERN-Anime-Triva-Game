import React from 'react';
import { Link } from 'react-router-dom';

import './Game.css';
import FetchTriviaGuest from '../components/FetchTrivia-Guest';

const Game = () => {
  
  return (
      <div>
        <nav className="navbar navbar-expand-lg d-flex justify-content-start flex-nowrap bg-light shadow">
          <div className="container-fluid m-0 nav-logo-container">
            <span className="navbar-brand mb-0 h1 me-1 font-monospace">NameTheAnime</span>
          </div>
          <ul className="navbar-nav me-3 float-start">
            <li className="nav-item">
              <Link className="nav-link active p-1" to="/dashboard/guest">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <FetchTriviaGuest />
        <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
          <div class="d-flex align-items-center">
            <a href="https://github.com/benlazzero/AniCharTrivia" class="me-2 mb-md-0 text-muted lh-1">
              github
            </a>
            <span class="text-muted">2022 Ben Lazzeroni</span>
          </div>
        </footer>
      </div>
  )
};

export default Game;
