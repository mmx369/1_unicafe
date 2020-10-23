import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ good, neutral, bad, totalVotes }) => {

  const average = good * 1 + bad * -1 / totalVotes
  const positive = good / totalVotes * 100

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={totalVotes} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={`${positive}%`} />
      </tbody>
    </table>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const ShowStatistic = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad;

  if (totalVotes === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <Statistics
      totalVotes={totalVotes}
      good={good}
      neutral={neutral}
      bad={bad}
    />
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandleClick = () => {
    setGood(good + 1);
  };

  const neutralHandleClick = () => {
    setNeutral(neutral + 1);
  };

  const badHandleClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodHandleClick} text="good" />
      <Button handleClick={neutralHandleClick} text="neutral" />
      <Button handleClick={badHandleClick} text="bad" />
      <h2>statistics</h2>
      <ShowStatistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
