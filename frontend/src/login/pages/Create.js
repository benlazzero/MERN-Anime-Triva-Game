import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './create.css';
import bgphoto from '../../public/createbg2.png';
import sword from '../../public/animesword.png';

const Create = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();

  let navigate = useNavigate();
  
  const getInfo = async () => {
    try {
      const url ='http://localhost:4000/auth/user';
      let data = await axios.get(url, { withCredentials: true})
      setUser(data)
    } catch (err) {
     console.log(err); 
    }
  }

  let addUsername = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/create', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: username, user: user.data }),
    })
    navigate('/dashboard');
  } 
  
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="create-page-wrapper">
      <div className="create-hero">
        <div className="inner-hero">
          <span className="text-light fw-bold w-75">NameTheAnime</span>
          <span className="text-light fw-bold fs-3 w-75">
            Welcome to the world's most concise anime trivia game and database.
          </span>
          <img className="create-bg-img" src={bgphoto}></img>
        </div>
      </div>
      <div className="create-form">
        <div className="inner-form">
          <form className="" onSubmit={addUsername}>
            <img src={sword} className="mb-5"></img>
            <label className="fs-5 mb-3 text-center">Create a username</label>
            <input className="form-control mb-3 w-75" type="text" maxlength="10" placeholder="Maximum 10 characters" onChange={(e) => setUsername(e.target.value)} />
            <button className="btn btn-primary w-75 mb-5" type="submit">Submit</button>  
          </form>
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
    </div>
  )
}

export default Create;