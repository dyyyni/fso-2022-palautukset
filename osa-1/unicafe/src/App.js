import { useState } from 'react';

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

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;
