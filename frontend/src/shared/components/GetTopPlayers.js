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
    for (let i = 0; i < 10; i++) {
      usernames.push(<li className="d-flex mb-2 list-group-item flex-players-list" key={i.toString()}>{<span className="fw-bold list-rank">{i+1}</span>} {<span className="font-monospace list-name">{players[i].username}</span>}<span className="font-monospace list-score">{players[i].score}/{players[i].total}</span></li>);
      //scores.push(<li className="mb-2 fs-5" key={(i+10).toString()}>{players[i].score}/{players[i].total}</li>);
    }

  }
  
  if (players.length === 0) {
    return ( <p>loading...</p> );
  } 
  return ( 
    <div className="row w-auto m-auto">
      <ol className="col list-group text-start pe-0">
        <li className="d-flex mb-2 list-group-item flex-players-list border-0 info-header">
          <span id="rank" className="list-rank">Rank</span>
          <span id="username" className="font-monospace list-name">Username</span>
          <span id="score" className="font-monospace list-score">Score</span>
        </li>
        {usernames}
      </ol>
      {/*<ul className="col list-group scores">{scores}</ul>*/}
    </div>
  );
}

export default GetTopPlayers;

