import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
  const [username, setUsername] = useState();
  let navigate =useNavigate();

  if (props.user === undefined) {
    props.getUser();
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
      body: JSON.stringify({ name: username, user: props.user }),
    })
    navigate('/dashboard');
  } 

  return (
    <div>
    { console.log(props.user) }
      <p>create page</p>
      <form onSubmit={addUsername}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">submit</button>  
      </form>
    </div>
  )
}

export default Create;