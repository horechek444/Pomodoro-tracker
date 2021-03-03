import React from 'react';
import './App.css';
import { padTimeFunction } from '../../utils/utils';
import Button from "../Button/Button";
import Time from "../Time/Time";

const App = () => {
  const [title, setTitle] = React.useState('Да начнётся обратный отсчёт!')
  const [timeLeft, setTimeLeft] = React.useState(25 * 60);
  const [isRunning, setIsRunning] = React.useState(false);
  const intervalRef = React.useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    setTitle('Ты отлично справляешься!');
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  const stopTimer = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Так держать!');
    setIsRunning(false);
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Готов ко второму заходу?');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  const minutes = padTimeFunction(Math.floor(timeLeft / 60));
  const seconds = padTimeFunction(timeLeft - minutes * 60)

  return (
    <div className="app">
      <h1 className="app__title">{title}</h1>

      <div className="app__timer">
        <Time title={minutes}/>
        <Time title={':'}/>
        <Time title={seconds}/>
      </div>

      <div className="app__buttons">
        <Button onClick={isRunning ? stopTimer : startTimer} title={isRunning ? 'Stop' : 'Start'} />
        <Button onClick={resetTimer} title={'Reset'} />
      </div>
    </div>
  );
}

export default App;
