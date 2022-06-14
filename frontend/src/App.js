import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Login from './login/pages/Login';
import Dashboard from './dashboard/pages/Dashboard';
import Game from './game/pages/Game';
import Create from './login/pages/Create';

function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const url ='http://localhost:4000/auth/login/success';
      let data = await axios.get(url, { withCredentials: true})
      data = await data.data.user._json.email;
      setUser(data);

    } catch (err) {
     console.log(err); 
    }
       
  }

  return (
    <Router>
      <Routes>
      {console.log(user)}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/guest" element={<Dashboard />} />
        <Route path="/game/guest" element={<Game />} />
        <Route path="/create" element={<Create getUser={getUser} userEmail={user}/>} />
      </Routes>
    </Router>
  );
};

export default App;
