import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './GetTopPlayers.css';

const GetTopPlayers = () => {
  const [players, setPlayer] = useState([]);
  let usernames = [];
  let scores = [];

  useEffect(() => {
    const source = axios.CancelToken.source();
    let isMounted = true;
    
    
    const fetchData = async () => {
      try {
      let result = await axios(
        'http://localhost:4000/dashboard',
        { cancelToken: source.token }
      );
      if (isMounted) {
        setPlayer(result.data.player);
      } 
      } catch (error) {
        return <p>error</p>;
      }
    }
  
    fetchData();

    return () => {
      isMounted = false;
      source.cancel();
    }
  }, []); 

  if (players.length !== 0) {
    for (let i = 0; i < players.length; i++) {
      usernames.push(<li key={i.toString()}>{players[i].username}</li>);
      scores.push(<li key={(i+10).toString()}>{players[i].score}/{players[i].total}</li>);
    }

  }
  
  if (players.length === 0) {
    return ( <p>loading...</p> );
  } 
  return ( 
    <div className='list-wrapper'>
      <ol className='usernames'>{usernames}</ol>
      <ul className='scores'>{scores}</ul>
    </div>
  );
}

export default GetTopPlayers;

