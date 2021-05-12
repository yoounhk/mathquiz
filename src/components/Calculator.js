import {React, useState, useRef, useEffect} from 'react';

function Calculator(props) {

  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [operator, setOperator] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const [answer, setAnswer] = useState(null);

  const makeQuiz = () => {
    const operators = ['+', '-', '*', '/'];
    const randInt1 = Math.floor(Math.random() * 100) + 1;
    const randInt2 = Math.floor(Math.random() * 100) + 1;
    const randOperator = operators[Math.floor(Math.random() * 4)];
    setLeft(randInt1);
    setRight(randInt2);
    setOperator(randOperator);
    if (randOperator === '+') {
      setAnswer(randInt1 + randInt2);
    } else if (randOperator === '-') {
      setAnswer(randInt1 - randInt2);
    } else if (randOperator === '*') {
      setAnswer(randInt1 * randInt2);
    } else if (randOperator === '/') {
      setAnswer(parseInt(randInt1 / randInt2));
    }
  }

  useEffect(() => {
    makeQuiz();
  }, []);

  const submitHandle = (e) => {
    if (operator === '+') {
      alert(userInput === answer ? '맞았습니다.' : '틀렸습니다.');
    } else if (operator === '-') {
      alert(userInput === answer ? '맞았습니다.' : '틀렸습니다.');
    } else if (operator === '*') {
      alert(userInput === answer ? '맞았습니다.' : '틀렸습니다.');
    } else if (operator === '/') {
      alert(userInput === answer ? '맞았습니다.' : '틀렸습니다.');
    }
    makeQuiz();
    inputRef.current.value = '';
  };

  const changeHandle = (e) => {
    setUserInput(parseInt(e.target.value));
  };

  const keyPressHandle = (e) => {
    if (e.key === 'Enter') {
      submitHandle();
    }
  };

  const inputRef = useRef();

  return (
    <>
      <div className="main">
        <div>{left} {operator} {right} = ?</div>
        <div>정답은 아래를 긁어보세요 <div className="answer">{answer}</div></div>
        <div>
          <input type="text"
                 onChange={changeHandle}
                 onKeyPress={keyPressHandle}
                 ref={inputRef}
          />
          <button onClick={submitHandle}>제출</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;