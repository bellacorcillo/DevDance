import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [breakTime, setBreakTime] = useState(null);

  const startRegularPomodoro = () => {
    setBreakTime(25 * 60 * 1000);
    setTimeout(() => {
      alert('Time for a break! (In Elvish: Coiva n\'alaquenta!) \nMove your body, unclench your jaw, drink some water.');
      // You can also play a song using a new window with YouTube link or any audio player here
      // window.open('YOUR_YOUTUBE_LINK_HERE', '_blank');
    }, 25 * 60 * 1000);
  };

  const startExtendedPomodoro = () => {
    setBreakTime(45 * 60 * 1000);
    setTimeout(() => {
      alert('Time for an extended break! (In Elvish: Coiva n\'alaquenta andave!) \nMove your body, unclench your jaw, drink some water.');
      // You can also play a song using a new window with YouTube link or any audio player here
      // window.open('YOUR_YOUTUBE_LINK_HERE', '_blank');
    }, 45 * 60 * 1000);
  };

  return (
    <div className="app">
      <header className="app-header">
        🍃 DevBreak - Time for a Middle-Earth Retreat! 🌌
      </header>
      <div className="pomodoro-container">
        <button className="pomodoro-button" onClick={startRegularPomodoro}>
          25 minutes + 5 min break
        </button>
        <button className="pomodoro-button" onClick={startExtendedPomodoro}>
          45 minutes + 15 min break
        </button>
      </div>
    </div>
  );
};

export default App;

