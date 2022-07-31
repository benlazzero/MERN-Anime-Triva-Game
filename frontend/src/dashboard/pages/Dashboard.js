import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';
import './Dashboard.css';


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
    <div className="bg-wrapper">
      <div>
        <nav className="navbar navbar-expand-lg bg-light shadow">
          <div class="container-fluid justify-content-center">
            <p className="navbar-brand mb-0 h1">NameTheAnime</p>
            <ul className="navbar-nav">
              <li className="nav-item">
                <StartButton />
              </li>
              <li className="nav-item">
                <button className="nav-link active navbtnedit" onClick={isEditViewable} >
                  Edit Account
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link active" onClick={logoutHandler} href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div>
            { edit ? <div className="card bg-danger text-white shadow-sm text-center">
                       <div className="card-body">
                          <div className="mt-2">
                            <button className="btn btn-outline-dark text-white" onClick={isEditViewable}>X</button>
                          </div>
                          <div className="text-center fs-3 mt-3">
                            Selections Can Not Be Undone
                          </div>
                          <div className="btn-wrapper">
                            <button className="btn btn-outline-warning mb-3 mt-3" onClick={deleteHandler} >remove account</button>
                            <button className="btn btn-outline-warning" onClick={resetHandler} >reset score</button>
                          </div>
                       </div>
                     </div>
            : null }
          </div>
          <div>
            { user !== undefined ? console.log(user) : console.log('user undefined') }
            <div className="alert alert-success mb-0 mt-4">
              { user !== undefined ? <h1>Login Success: Welcome {user.data.user.username}!</h1> : <h1>Loading</h1> }
            </div>
              <TopPlayers />
            { user !== undefined ? <Stats score={user.data.user.score} total={user.data.user.total} /> : <Stats /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
