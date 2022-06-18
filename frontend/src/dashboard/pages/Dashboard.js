import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';

const Dashboard = () => {
  const [user, setUser] = useState(); 

  const getInfo = async () => {
    try {
      const url ='http://localhost:4000/auth/user';
      let data = await axios.get(url, { withCredentials: true})
      setUser(data)
    } catch (err) {
     console.log(err); 
    }
  }

  const logoutHandler = async () => {
    console.log("in logout handler");
    try {
      const url = 'http://localhost:4000/auth/logout';
      await axios.delete(url, { withCredentals: true });
      setUser(undefined);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="dash-wrapper">
    { user !== undefined ? <h1>{user.data.user.username}</h1> : <h1>Loading</h1> }
      <TopPlayers />
    { user !== undefined ? <Stats score={user.data.user.score} total={user.data.user.total} /> : <Stats /> }
      <StartButton />
      <a onClick={logoutHandler} href="/">logout</a>
    </div>
  );
};

export default Dashboard;
