import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// const numQuestions = 0;
// const numCorrect = 0;

const App = () => {
  let [score, setScore] = useState({
    numCorrect: 0,
    numQuestions: 0,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <Game score={score} setScore={setScore} />
      <Score score={score} />
    </div>
  );
};

function Game({ score, setScore }) {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  function makeNewEquation() {
    let newValue1 = Math.floor(Math.random() * 100);
    let newValue2 = Math.floor(Math.random() * 100);
    let newValue3 = Math.floor(Math.random() * 100);
    let NewPropsedAnswer =
      Math.floor(Math.random() * 3) + newValue1 + newValue2 + newValue3;

    setValue1(newValue1);
    setValue2(newValue2);
    setValue3(newValue3);
    setProposedAnswer(NewPropsedAnswer);
  }


  useEffect(makeNewEquation,[])

  function handleClick(e) {
    function isRightAnswer() {
      let isEqual = proposedAnswer === value1 + value2 + value3;
      return  (
        (e.target.name === "true" && isEqual) ||
        (e.target.name === "false" && !isEqual)
      )
    }

    if (isRightAnswer()) {
      setScore({
        numCorrect: score.numCorrect + 1,
        numQuestions: score.numQuestions + 1,
      });
    } else {
      setScore({
        ...score,
        numQuestions: score.numQuestions + 1,
      });
    }

    makeNewEquation()
  }

  return (
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button onClick={handleClick} name="true">
        True
      </button>
      <button onClick={handleClick} name="false">
        False
      </button>
    </div>
  );
}

function Score({ score }) {
  return (
    <p className="text">
      Your Score: {score.numCorrect}/{score.numQuestions}
    </p>
  );
}
export default App;
