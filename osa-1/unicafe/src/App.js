import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = 0;
  let positive = 0;
  if (all > 0) {
    average = (good * 1 + neutral * 0 + bad * -1) / all;
    positive = (good / all) * 100;

    return (
      <>
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all}</p>
        <p>Average {average}</p>
        <p>Positive {positive} %</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setIncrement = (buttonType) => () => {
    if (buttonType === 'good') {
      setGood(good + 1);
    } else if (buttonType === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={setIncrement('good')} text="Good" />
      <Button handleClick={setIncrement('neutral')} text="Neutral" />
      <Button handleClick={setIncrement('bad')} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
