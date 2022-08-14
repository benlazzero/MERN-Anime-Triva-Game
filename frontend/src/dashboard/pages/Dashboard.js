import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopPlayers from '../components/TopPlayers';
import Stats from '../components/Stats';
import StartButton from '../components/StartButton';
import './Dashboard.css';
import settingsIcon from '../../public/settings.png';
import confirmIcon from '../../public/areyousure.png';

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
      getInfo();
      getStats();
  }, [holdUser]);

  return (
    <div className="bg-wrapper"> 
          <div className="edit-anime-bg">
            { edit ? <div className="edit-menu-wrapper" id="edit-first-menu">
                          <div className="edit-top-wrapper">
                            <img src={settingsIcon} alt="cartoon gear icon" className="icon-settings"></img>
                            <button className="btn-close close-btn-edit" aria-label="Close" onClick={isEditViewable}></button>
                          </div>
                          <div className="edit-p">
                            <p>Account settings</p>
                            <p>You may choose to either delete or reset your account.</p>
                          </div>
                          <div className="btn-wrapper">
                            <button className="btn btn-danger" onClick={() => {confirmSelection("delete")}} >Delete</button>
                            <button className="btn btn-warning" onClick={() => {confirmSelection("reset")}} >Reset</button>
                          </div>
                    </div>
            : null }
            { confirm ? <div className="edit-menu-wrapper" id="edit-second-menu">
                            <div className="edit-top-wrapper">
                              <img src={confirmIcon} alt="cat frowning icon" className="icon-settings mb-2"></img>
                            </div>
                              <div className="edit-p">
                                <p>Are you sure you want to <em>{editSelection}</em> your account?</p>
                              </div>
                            <div className="btn-wrapper">
                              <button className="btn btn-secondary" onClick={() => {setEdit(true); setConfirm(false)}}>Cancel</button>
                              <button className="btn btn-primary" onClick={() => {editSelection === "reset" ? resetHandler() : deleteHandler()}}>Confirm</button>
                            </div>
                        </div>
            : null }
          </div>
      <div className="dash-bg-color" id={edit || confirm ? "root-bg" : ""}>
        <nav className="navbar navbar-expand-lg bg-light shadow">
          <div className="container-fluid gx-5">
            <span className="navbar-brand mb-0 h1 font-monospace">NameTheAnime</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse gy-5 drop-down-nav" id="navbarNav">
              <ul className="navbar-nav float-end text-end">
                <li className="nav-item">
                  { user !== undefined ? <span className="nav-link disabled fst-italic font-monospace">{user.data.user.username}</span> : null }
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
        <div className="content-bg-dash">
          <div>
              <TopPlayers />
            <ol className="list-group test-start">
            { statsInfo !== undefined ? <Stats score={statsInfo.data.userStats.score} total={statsInfo.data.userStats.total} username={statsInfo.data.userStats.username} rank={statsInfo.data.userStats.rank} /> : <Stats /> }
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3">
          <div className="d-flex align-items-center">
            <a href="https://github.com/benlazzero/AniCharTrivia" className="me-2 mb-md-0 text-muted lh-1">
              github
            </a>
            <span className="text-muted">2022 Ben Lazzeroni</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
