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
      usernames.push(<li className="mb-0 fs-5 list-group-item" key={i.toString()}>{i+1}. {players[i].username} <span className="float-end">{players[i].score}/{players[i].total}</span></li>);
      //scores.push(<li className="mb-2 fs-5" key={(i+10).toString()}>{players[i].score}/{players[i].total}</li>);
    }

  }
  
  if (players.length === 0) {
    return ( <p>loading...</p> );
  } 
  return ( 
    <div className="row w-auto m-auto">
      <ol className="col list-group text-start">{usernames}</ol>
      {/*<ul className="col list-group scores">{scores}</ul>*/}
    </div>
  );
}

export default GetTopPlayers;

