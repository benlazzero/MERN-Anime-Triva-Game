import React, { useState, useEffect } from 'react';

const AnswerButtons = (props) => {
  let answer = props.randAnswers[0];
  let answers = [props.randAnswers[0], props.randAnswers[1], props.randAnswers[2], props.randAnswers[3]];
  const arrayOfIndexes = [
    [0, 1, 2, 3],
    [1, 0, 2, 3],
    [1, 2, 0, 3],
    [1, 2, 3, 0]
  ];
  let mixedUpAnswers = [];
  let randomIndex = Math.floor(Math.random() * 4);
  const selectedIndexes = arrayOfIndexes[randomIndex];

  for (let i = 0; i < 4; i++) {
    mixedUpAnswers.push(answers[selectedIndexes[i]]);
  }


  return (
    <div>
      <p>{mixedUpAnswers[0] ? mixedUpAnswers[0] : 'loading...'}</p> 
      <p>{mixedUpAnswers[1] ? mixedUpAnswers[1] : 'loading...'}</p> 
      <p>{mixedUpAnswers[2] ? mixedUpAnswers[2] : 'loading...'}</p> 
      <p>{mixedUpAnswers[3] ? mixedUpAnswers[3] : 'loading...'}</p> 
      {console.log(answer)}
    </div>
    
  )
};

export default AnswerButtons;
