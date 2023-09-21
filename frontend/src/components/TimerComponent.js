import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./TimerComponent.css";

function TimerComponent() {
  const [timerDuration, setTimerDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [onBreak, setOnBreak] = useState(false);
  const navigate = useNavigate();

  const startTimer = (duration) => {
    setOnBreak(false);
    setTimerDuration(duration);
    setTimeLeft(duration * 60);
  };

  const startBreak = (breakDuration) => {
    setOnBreak(true);
    setTimeLeft(breakDuration * 60);
  };

  useEffect(() => {
    let timer;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerDuration !== 0) {
      clearInterval(timer);
      if (!onBreak) {
        const breakDuration = timerDuration === 25 ? 5 : 15;
        startBreak(breakDuration);
      } else {
        navigate('/break');
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeLeft, timerDuration, navigate, onBreak]);

  return (
    <div className="timer-component">
      <h2>Timer</h2>
      <button onClick={() => startTimer(25)}>Start 25-Minute Timer</button>
      <button onClick={() => startTimer(45)}>Start 45-Minute Timer</button>
      {timeLeft > 0 ? <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p> : null}
      {timeLeft === 0 && timerDuration === 0 ? <p>Timer is not running.</p> : null}
      <Link to="/break">
        Discover Break Ideas Inspired by the Whimsy of Hobbits and Elves!
      </Link>
    </div>
  );
}

export default TimerComponent;
