import React, { useState, useEffect, useRef } from 'react';

const AnswerButtons = (props) => {
  const [outcome, showOutcome] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [rightAnswer, setRightAnswer] = useState(props.randAnswers[0]);
  const selected = React.createRef();
  const ansIsSet = useRef(false);
  let tempAnswers = [];

  useEffect(() => {
    setRightAnswer(props.randAnswers[0]);
    let tempAnswers = [props.randAnswers[0], props.randAnswers[1], props.randAnswers[2], props.randAnswers[3]];
    setAnswers(tempAnswers);
  }, [props])

  const MakeMixedAnsArray = () => {
    let mixedUpAnswers = [];
    const arrayOfIndexes = [
      [0, 1, 2, 3],
      [1, 0, 2, 3],
      [1, 2, 0, 3],
      [1, 2, 3, 0]
    ];
    let randomIndex = Math.floor(Math.random() * 4);
    const selectedIndexes = arrayOfIndexes[randomIndex];
    
    for (let i = 0; i < 4; i++) {
      if (answers[selectedIndexes[i]] !== undefined) {
        mixedUpAnswers.push(answers[selectedIndexes[i]]);
      }
    }
    return mixedUpAnswers;
  }

    if (ansIsSet.current === false) {
      console.log('called array scrambler');
      tempAnswers = MakeMixedAnsArray();
    }
    if (tempAnswers.length > 0) {
     console.log('set to true');
     ansIsSet.current = true;
     setMixedAnswers(tempAnswers);
    }

  

  // onclick show right/wrong answer, prompt for next question
  let possibleAnswers = [];
  const testClick = (event) => {
    console.log("right answer is " + rightAnswer);
    console.log("event target is " + event.target.innerHTML);
    selected.current = event.target;
    console.log(selected.current)
    if (selected.current.innerHTML === rightAnswer) {
      showOutcome(true);
      selected.current.style.color = "green"; 
    } else {
      selected.current.style.color = "red";
      possibleAnswers = event.target.parentNode.childNodes;

      for (let i = 0; i < possibleAnswers.length; i++) {
        if (possibleAnswers[i].innerHTML === rightAnswer) {
          possibleAnswers[i].style.color = "blue";
          break;
        }
      }

      showOutcome(true);
    }
  }


  return (
      <div>
        {console.log(mixedAnswers)}
        {console.log("rendered main")}
        {console.log(rightAnswer)}
        <button onClick={testClick}>
          {mixedAnswers[0] ? mixedAnswers[0] : 'loading...'}
        </button>
        <button onClick={testClick}>
          {mixedAnswers[1] ? mixedAnswers[1] : 'loading...'}
        </button>
        <button onClick={testClick}>
          {mixedAnswers[2] ? mixedAnswers[2] : 'loading...'}
        </button>
        <button onClick={testClick}>
          {mixedAnswers[3] ? mixedAnswers[3] : 'loading...'} 
        </button>
        { outcome ? <button onClick={()=> {window.location.reload(false)}}>next question</button> : null }
      </div>
  )
};

export default AnswerButtons;
