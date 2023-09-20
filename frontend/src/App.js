import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [isConnectedToSpotify, setIsConnectedToSpotify] = useState(false);
    const [timer, setTimer] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        let intervalId;
        if (timer) {
            intervalId = setInterval(() => {
                const newTime = timeRemaining - 1000; // reduce by one second
                setTimeRemaining(newTime);
                if (newTime <= 0) {
                    clearInterval(intervalId);
                    if (timer === 'regular') alert('Time for a 5-minute dance break!');
                    if (timer === 'extended') alert('Time for a 15-minute dance break!');
                    setTimer(null);
                }
            }, 1000);
        }
        return () => clearInterval(intervalId);  // Cleanup on unmount
    }, [timer, timeRemaining]);

    const startRegularPomodoro = () => {
        setTimer('regular');
        setTimeRemaining(25 * 60 * 1000);
    };

    const startExtendedPomodoro = () => {
        setTimer('extended');
        setTimeRemaining(45 * 60 * 1000);
    };

    return (
        <div className="app">
            <header className="app-header">
                🎵 DevDance - Let's Groove While We Work! 💃
            </header>
            <div className="pomodoro-container">
                <button className="pomodoro-button" onClick={startRegularPomodoro}>
                    25 minutes + 5 min break
                </button>
                <button className="pomodoro-button" onClick={startExtendedPomodoro}>
                    45 minutes + 15 min break
                </button>
            </div>
            {!isConnectedToSpotify && (
                <button className="spotify-button" onClick={() => window.location.href='/login'}>
                    Connect to Spotify
                </button>
            )}
        </div>
    );
}

export default App;



