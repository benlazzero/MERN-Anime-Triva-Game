import React from 'react';

import './LoginButton.css';

const LoginButton = (props) => {

  const googleAuth= () => {
    window.open('http://localhost:4000/auth/google/callback',
    "_self"
    );
  };        

  return (
    <div>
      <h2>members login</h2>
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Password' />
      <button>Login</button>
      <button onClick={googleAuth} className="button-wrapper">
        <p>{props.name}</p> 
      </button>
    </div>
  );
};

export default LoginButton;
