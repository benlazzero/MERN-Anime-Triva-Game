import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';
import './Dashboard.css';

import folderImage from '../../public/folder.png';

const Dashboard = () => {
  const [user, setUser] = useState(); 
  const [edit, setEdit] = useState(false);
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

  const deleteHandler = async () => {
    try {
      const url = 'http://localhost:4000/edit';
      let data = await axios.delete(url, { withCredentials: true })
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      window.location.replace('http://localhost:3000')
      // handle redirect to login page
    }
  }

  const resetHandler = async () => {
    try {
      const url = 'http://localhost:4000/edit';
      let data = await axios.put(url, { withCredentials: true, user: {user}}, {
        headers: {
          'Access-Control-Allow-Origin': '*', 
        }
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setEdit(false);
      window.location.reload(false);
      // refresh page somehow
    }
  }

  const isEditViewable = () => {
    setEdit(!edit);
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
              <a onClick={logoutHandler} className="header-link" href="/">
                <img src={folderImage} width="64px" height="64px" />
                <p>Logout</p>
              </a>
              <button onClick={isEditViewable} className="header-link">
                <img src={folderImage} width="64px" height="64px" />
                <p>Edit Account</p>
              </button>
              <StartButton />
            </div>
            { edit ? <div className="edit-wrapper">
                        <button className='edit-toggle-button' onClick={isEditViewable} />
                        <div className="edit-info">
                          <p>selections can not be undone</p>
                        </div>
                        <div className="edit-btn-wrapper">
                          <button onClick={deleteHandler} >remove account</button>
                          <button onClick={resetHandler} >reset score</button>
                        </div>
                     </div>
            : null }
          </div>
          <div className="dash-wrapper">
            { user !== undefined ? console.log(user) : console.log('user undefined') }
            { user !== undefined ? <h1 className="user-name" >Welcome<br />{user.data.user.username}</h1> : <h1>Loading</h1> }
              <TopPlayers />
            { user !== undefined ? <Stats score={user.data.user.score} total={user.data.user.total} /> : <Stats /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
