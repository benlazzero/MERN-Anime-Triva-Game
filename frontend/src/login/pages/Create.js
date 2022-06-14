import React, { useState } from 'react';

const Create = (props) => {
  const [username, setUsername] = useState();
  props.getUser();

  let addUsername = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/create', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: username, email: props.userEmail }),
    })
    console.log(username);
    console.log(props.userEmail);
  } 
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