import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';
import './Dashboard.css';

import folderImage from '../../public/folder.png';

const Dashboard = () => {
  const [user, setUser] = useState(); 
  let holdUser;

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
      console.log('get effect called');
      getInfo();
  }, [holdUser]);

  return (
    <div className="html-wrapper">
      <div className="main-wrapper">
        <p className="domain">NameTheAnime.com</p>
        <div className="bg-wrapper">
          <div className="header">
            <div className="header-content">
              <a className="header-link" href="/">
                <img src={folderImage} width="64px" height="64px" />
                <p>Back To Login</p>
              </a>
              <StartButton />
              <a onClick={logoutHandler} href="/">logout</a>
            </div>
          </div>
          <div className="dash-wrapper">
            { user !== undefined ? console.log(user) : console.log('user undefined') }
            { user !== undefined ? <h1>{user.data.user.username}</h1> : <h1>Loading</h1> }
              <TopPlayers />
            { user !== undefined ? <Stats score={user.data.user.score} total={user.data.user.total} /> : <Stats /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
