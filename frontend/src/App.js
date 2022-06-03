import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './login/pages/Login';
import Dashboard from './dashboard/pages/Dashboard';
import Game from './game/pages/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/guest" element={<Dashboard />} />
        <Route path="/game/guest" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
