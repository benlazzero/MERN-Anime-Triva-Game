import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import '../pages/Game.css';

const AnswerButtons = (props) => {
  const [outcome, showOutcome] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [rightAnswer, setRightAnswer] = useState(props.randAnswers[0]);
  const selected = React.createRef();
  const currentUser = useRef("");
  const ansIsSet = useRef(false);
  const total = useRef(0);
  const score = useRef(0);
  let tempAnswers = [];

  useEffect(() => {
    let tempAnswers = [props.randAnswers[0], props.randAnswers[1], props.randAnswers[2], props.randAnswers[3]];
    setAnswers(tempAnswers);
    showOutcome(false);
    setMixedAnswers([]);
    document.querySelectorAll('button').forEach(button => {
      button.style = 'unset';
    });
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
    if (tempAnswers.length > 0 && mixedAnswers.length === 0) {
     console.log('set to true');
     setRightAnswer(props.randAnswers[0]);
     ansIsSet.current = true;
     setMixedAnswers(tempAnswers);
    } else if (tempAnswers.length === 0) {
      ansIsSet.current = false;
    }
  

  // onclick show right/wrong answer, prompt for next question
  let possibleAnswers = [];
  const handleClick = (event) => {
    if (currentUser.current === "") {
      axios.get('http://localhost:4000/auth/user', { withCredentials: true })
        .then( response => (currentUser.current = response.data.user.email))
    }
    selected.current = event.target;
    if (selected.current.innerHTML === rightAnswer) {
      showOutcome(true);
      selected.current.style.backgroundColor = "#198754"; 
      //selected.current.classList.add("btn-success"); 
      total.current = total.current + 1;
      score.current = score.current + 1;
      event.preventDefault();
      fetch('http://localhost:4000/update', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score: 1, total: 1 }),
      })
    } else {
      selected.current.style.backgroundColor = "#dc3545";
      possibleAnswers = event.target.parentNode.childNodes;
      for (let i = 0; i < possibleAnswers.length; i++) {
        if (possibleAnswers[i].innerHTML === rightAnswer) {
          possibleAnswers[i].style.backgroundColor = "#0dcaf0";
          break;
        }
      }
      total.current = total.current + 1;
      showOutcome(true);
      event.preventDefault();
      fetch('http://localhost:4000/update', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score: 0, total: 1 }),
      })
    }
    console.log(selected.current);
  }


  return (
      <div>
        <div>
          {console.log("current user is" + currentUser.current)}
          {console.log('from parent component' + tempAnswers)}
          {console.log(rightAnswer)}
          <div className="d-flex w-50 m-auto justify-content-center text-center">
            <p className="fs-1 fw-bold font-monospace text-success">{score.current}</p>
            <p className="fs-1 font-monospace text-secondary">/</p>
            <p className="fs-1 fw-bold font-monospace text-secondary">{total.current}</p>
          </div>
          <div className="btn-group-vertical d-flex m-auto w-25 ans-btn-group">
            { outcome ?
            <button disabled className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[0] ? mixedAnswers[0] : 'loading...'}
            </button>
            :
            <button className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[0] ? mixedAnswers[0] : 'loading...'}
            </button>
            }
            { outcome ?
            <button disabled className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[1] ? mixedAnswers[1] : 'loading...'}
            </button>
            :
            <button className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[1] ? mixedAnswers[1] : 'loading...'}
            </button>
            }
            { outcome ?
            <button disabled className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[2] ? mixedAnswers[2] : 'loading...'}
            </button>
            :
            <button className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[2] ? mixedAnswers[2] : 'loading...'}
            </button>
            }
            { outcome ?
            <button disabled className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[3] ? mixedAnswers[3] : 'loading...'}
            </button>
            :
            <button className="btn btn-primary btn-lg mb-3" onClick={handleClick}>
              {mixedAnswers[3] ? mixedAnswers[3] : 'loading...'}
            </button>
            }
          </div>
        </div>
        <div className="m-auto w-25 mt-3 mb-5 next-btn">
          { outcome ? <button className="btn btn-secondary btn-lg w-100 m-auto"id="next-question" onClick={props.reload}>next question</button> : null }
        </div>
      </div>
  )
};

export default AnswerButtons;
