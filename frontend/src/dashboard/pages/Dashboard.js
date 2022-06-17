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
      data = await data;
      setUser(data);

    } catch (err) {
     console.log(err); 
    }

       
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="dash-wrapper">
      { console.log(user) }
      <TopPlayers />
    { user !== undefined ? <Stats score={user.data.user.score} total={user.data.user.total} /> : <Stats /> }
      <StartButton />
      <a href="/">back to login</a>
    </div>
  );
};

export default Dashboard;
