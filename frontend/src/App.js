import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Login from './login/pages/Login';
import Dashboard from './dashboard/pages/Dashboard';
import DashboardGuest from './dashboard/pages/Dashboard-Guest';
import Game from './game/pages/Game';
import Create from './login/pages/Create';

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login user={user}/>} />
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
        <Route path="/dashboard/guest" element={<DashboardGuest user={user}/>} />
        <Route path="/game/guest" element={<Game />} />
        <Route path="/create" element={<Create user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
