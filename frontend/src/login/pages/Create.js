import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <p>create page</p>
      <form onSubmit={addUsername}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">submit</button>  
      </form>
    </div>
  )
}

export default Create;