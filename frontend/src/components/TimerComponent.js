import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function TimerComponent() {
  const history = useHistory();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = (minutes, seconds) => {
    setMinutes(minutes);
    setSeconds(seconds);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          // Timer is done
          stopTimer();
          // Redirect to the break page
          history.push('/break');
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds, isRunning, history]);

  return (
    <div>
      <h2>Timer</h2>
      <button onClick={() => startTimer(25, 0)}>Start 25-Minute Timer</button>
      <button onClick={() => startTimer(45, 0)}>Start 45-Minute Timer</button>
      {isRunning ? (
        <div>
          <p>
            {minutes < 10 ? '0' : ''}
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </p>
          <button onClick={stopTimer}>Stop</button>
        </div>
      ) : null}
    </div>
  );
}

export default TimerComponent;

