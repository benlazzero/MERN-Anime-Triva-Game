import React from 'react';

import './LoginButton.css';

const GuestButton = (props) => {
  

  return (
      <button id="guest" className="button-wrapper" onClick={props.logout}>
        <a href={props.address}>{props.name}</a> 
      </button>
  );
};

export default GuestButton;
