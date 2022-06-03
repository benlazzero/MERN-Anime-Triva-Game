import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetRandomQuote = () => {
  const [quote, setQuote] = useState('loading...');
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); 
        await axios.get('http://localhost:4000/api/game')
        .then(result => setQuote(result.data.quote));

        setIsLoading(false);
      } catch (error) {
        return console.log(error);
      }
    };

    if (!isLoading) {
      console.log('in fetch block');
      fetchData();
    }
    

  //return () => {
    //isMounted = false;
    //source.cancel();
  //}
  }, []); 

  return (
    <p>{quote}</p>
  );
};

export default GetRandomQuote;
