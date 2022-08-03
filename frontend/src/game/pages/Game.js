import React from 'react';
import { Link } from 'react-router-dom';

import './Game.css';
import FetchTrivia from '../components/FetchTrivia';

const Game = () => {
  
  return (
      <div>
        <nav className="navbar navbar-expand-lg d-flex justify-content-start flex-nowrap bg-light shadow">
          <div className="container-fluid m-0 nav-logo-container">
            <span className="navbar-brand mb-0 h1 me-1">NameTheAnime</span>
          </div>
          <ul className="navbar-nav me-3 float-start">
            <li className="nav-item">
              <Link className="nav-link active p-1" to="/dashboard">back to dashboard</Link>
            </li>
          </ul>
        </nav>
        <FetchTrivia />
      </div>
  )
};

export default Game;
