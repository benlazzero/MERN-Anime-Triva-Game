import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './login/pages/Login';
import Dashboard from './dashboard/pages/Dashboard';
import DashboardGuest from './dashboard/pages/Dashboard-Guest';
import Game from './game/pages/Game';
import GameGuest from './game/pages/GameGuest';
import Create from './login/pages/Create';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/guest" element={<DashboardGuest />} />
        <Route path="/game/guest" element={<GameGuest />} />
        <Route path="/game" element={<Game />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
};

export default App;
