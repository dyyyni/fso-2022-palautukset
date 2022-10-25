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
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine
              text="Positive"
              value={positive}
              unit="%"
            />
          </tbody>
        </table>
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

const StatisticLine = ({ text, value, unit = '' }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>
        {value} {unit}
      </td>
    </tr>
  );
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
