import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestFetch = () => {
  const [quote, setQuote] = useState('loading...');

  useEffect(() => {
    const source = axios.CancelToken.source();
    let isMounted = true;
    
    
      const fetchData = async () => {
        try {
        let result = await axios(
          'http://localhost:4000/login',
          { cancelToken: source.token }
        );
        if (isMounted) {
        setQuote(result.data.quote);
        }
      } catch (error) {
        return;
      }
    }
  
  fetchData();

  return () => {
    isMounted = false;
    source.cancel();
  }
}, []); 

  return (
    <p>{quote}</p>
  );
}

export default TestFetch;
