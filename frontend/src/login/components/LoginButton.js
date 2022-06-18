import React from 'react';

import './LoginButton.css';

const LoginButton = (props) => {

  const loginGoogle = async () => {
      console.log("in app fetch block");
      window.open('http://localhost:4000/auth/google/callback',
      "_self"
      )
  }


  return (
    <div>
      <button onClick={loginGoogle} className="button-wrapper">
        <p>{props.name}</p> 
      </button>
    </div>
  );
};

export default LoginButton;
