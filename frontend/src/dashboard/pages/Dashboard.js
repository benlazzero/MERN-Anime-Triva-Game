import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';
import './Dashboard.css';

//href links with redirects need to use react router or something that doesnt reload
const Dashboard = () => {
  const [user, setUser] = useState(); 
  const [confirm, setConfirm] = useState(false);
  const [editSelection, setEditSelection] = useState();
  const [statsInfo, setStatsInfo] = useState(); 
  const [edit, setEdit] = useState(false);
  let holdUser;

  const confirmSelection = (selection) => {
   setEdit(false);  
   setConfirm(true);
   setEditSelection(selection);
  }

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
      setUser(undefined);
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
      <div className="dash-bg-color">
        <nav className="navbar navbar-expand-lg bg-light shadow">
          <div class="container-fluid gx-5">
            <span className="navbar-brand mb-0 h1">NameTheAnime</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse gy-5" id="navbarNav">
              <ul className="navbar-nav float-end text-end">
                <li className="nav-item">
                  { user !== undefined ? <span className="nav-link disabled fst-italic font-monospace" >{user.data.user.username}</span> : null }
                </li>
                <li className="nav-item">
                  <StartButton />
                </li>
                <li className="nav-item">
                  <a className="nav-link active" onClick={isEditViewable} >
                    Edit Account
                  </a>
                </li>
                { user !== undefined ?
                <li className="nav-item">
                  <a className="nav-link active" onClick={logoutHandler} href="/">
                    Logout
                  </a>
                </li>
                : 
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Login
                  </a>
                </li>
                }
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div className="edit-anime-bg">
            { edit ? <div className="card text-white shadow-sm text-center edit-card-bg">
                       <div className="card-body w-50 m-auto edit-card-content">
                          <div className="alert alert-warning text-center fs-5 mt-3 w-75 m-auto">
                            This action cannot be undone!
                          </div>
                          <div className="btn-wrapper">
                            <button className="btn btn-danger mb-3 mt-3" onClick={() => {confirmSelection("delete")}} >delete account</button>
                            <button className="btn btn-danger" onClick={() => {confirmSelection("reset")}} >reset score</button>
                          </div>
                          <div className="mt-2">
                            <button className="btn-close close-btn-edit" aria-label="Close" onClick={isEditViewable}></button>
                          </div>
                       </div>
                     </div>
            : null }
            { confirm ? <div className="card text-white shadow-sm text-center edit-anime-bg">
                          <div className="card-body w-50 m-auto confirm-bg">
                            <div className="text-center alert alert-warning fs-5 mt-3 w-75 m-auto">
                              Are you sure you want to <em>{editSelection}</em> your account?
                            </div>
                            <div className="btn-wrapper">
                              <button className="btn btn-dark mb-3 mt-3" onClick={() => {editSelection === "reset" ? resetHandler() : deleteHandler()}}>Confirm</button>
                              <button className="btn-close close-btn-edit m-auto" onClick={() => {setEdit(true); setConfirm(false)}}></button>
                            </div>
                          </div>
                        </div>
            : null }
          </div>
          <div>
            {console.log("stats info is " + statsInfo) }
            { user !== undefined ? console.log(user) : console.log('user undefined') }
              <TopPlayers />
            <ol className="list-group test-start">
            { statsInfo !== undefined ? <Stats score={statsInfo.data.userStats.score} total={statsInfo.data.userStats.total} username={statsInfo.data.userStats.username} rank={statsInfo.data.userStats.rank} /> : <Stats /> }
            </ol>
          </div>
        </div>
      </div>
      <div class="container">
  <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
    <div class="d-flex align-items-center">
      <a href="https://github.com/benlazzero/AniCharTrivia" class="me-2 mb-md-0 text-muted lh-1">
        github
      </a>
      <span class="text-muted">2022 Ben Lazzeroni</span>
    </div>

  </footer>
</div>
    </div>
  );
};

export default Dashboard;
