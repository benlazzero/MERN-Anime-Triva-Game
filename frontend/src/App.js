import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './login/pages/Login';
//import Dashboard from './dashboard/pages/Dashboard';
//import DashboardGuest from './dashboard/pages/Dashboard-Guest';
//import Game from './game/pages/Game';
//import GameGuest from './game/pages/GameGuest';
import Create from './login/pages/Create';

const Game = React.lazy(() => import('./game/pages/Game'));
const GameGuest = React.lazy(() => import('./game/pages/GameGuest'));
const DashboardGuest = React.lazy(() => import('./dashboard/pages/Dashboard-Guest'));
const Dashboard = React.lazy(() => import('./dashboard/pages/Dashboard'));

function App() {

  return (
    <Router>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/guest" element={<DashboardGuest />} />
          <Route path="/game/guest" element={<GameGuest />} />
          <Route path="/game" element={<Game />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
