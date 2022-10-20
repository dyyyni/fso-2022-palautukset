import { useState } from 'react';

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
      <button onClick={setIncrement('good')}>Good</button>
      <button onClick={setIncrement('neutral')}>Neutral</button>
      <button onClick={setIncrement('bad')}>Bad</button>

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;
