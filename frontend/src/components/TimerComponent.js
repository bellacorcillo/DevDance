import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./TimerComponent.css";

function TimerComponent() {
  const navigate = useNavigate();
  const [timerDuration, setTimerDuration] = useState(0);

  const startTimer = (duration) => {
    setTimerDuration(duration);
    // Start your countdown logic here
  };

  useEffect(() => {
    if (timerDuration === 0) {
      // Timer has reached zero, navigate to the break page
      navigate(`/break?duration=${timerDuration === 25 ? 5 : 15}`);
    }
  }, [timerDuration, navigate]);

  return (
    <div>
      <h2>Timer</h2>
      <button onClick={() => startTimer(25)}>Start 25-Minute Timer</button>
      <button onClick={() => startTimer(45)}>Start 45-Minute Timer</button>
    </div>
  );
}

export default TimerComponent;

