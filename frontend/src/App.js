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

  const getUser = async () => {
    try {
      const url ='http://localhost:4000/auth/login/success';
      let data = await axios.get(url, { withCredentials: true})
      data = await data.data.user._json;
      setUser(data);

    } catch (err) {
     console.log(err); 
    }
  }

  const logoutHandler = async () => {
    console.log("in logout handler");
    try {
    const url = 'http://localhost:4000/auth/logout';
    let data = await axios.delete(url);
    console.log(data);
    setUser(undefined);
    } catch (err) {
    console.log(err);
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login logout={logoutHandler} user={user}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/guest" element={<DashboardGuest />} />
        <Route path="/game/guest" element={<Game />} />
        <Route path="/create" element={<Create getUser={getUser} user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
