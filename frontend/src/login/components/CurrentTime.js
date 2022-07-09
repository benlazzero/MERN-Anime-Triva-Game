import React from 'react';

import './CurrentTime.css';
const CurrentTime = () => {
 
  let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let finalTime = time.slice(0, -3);

  if (finalTime.charAt(0) === "0") {
    finalTime = finalTime.substring(1);
  }


  return (
    <span className="time" >{finalTime}</span>
  );
};

export default CurrentTime;