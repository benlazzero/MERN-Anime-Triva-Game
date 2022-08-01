import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';
import './Dashboard.css';


const Dashboard = () => {
  const [user, setUser] = useState(); 
  const [statsInfo, setStatsInfo] = useState(); 
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

  const getStats = async () => {
    try {
      const url ='http://localhost:4000/stat';
      let data = await axios.get(url, { withCredentials: true})
      setStatsInfo(data)
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
      getStats();
  }, [holdUser]);

  return (
    <div className="bg-wrapper">
    { statsInfo !== undefined ? console.log(statsInfo.data.userStats) : null}
      <div>
        <nav className="navbar navbar-expand-lg bg-light shadow">
          <div class="container-fluid">
            <span className="navbar-brand mb-0 h1">NameTheAnime</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav float-end mt-3 me-2">
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
            <ol className="list-group test-start">
              { statsInfo !== undefined ? <Stats score={statsInfo.data.userStats.score} total={statsInfo.data.userStats.total} username={statsInfo.data.userStats.username} rank={statsInfo.data.userStats.rank} /> : <Stats /> }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
