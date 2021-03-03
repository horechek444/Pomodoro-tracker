import React from 'react';
import './App.css';
import padTimeFunction from '../../utils/utils';

const App = () => {
  const [timeLeft, setTimeLeft] = React.useState(25 * 60);

  const minutes = padTimeFunction(Math.floor(timeLeft / 60));
  const seconds = padTimeFunction(timeLeft - minutes * 60)

  return (
    <div className="app">
      <h1>Pomodoro!</h1>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
