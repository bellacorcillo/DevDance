import React, { useState } from 'react';
import PomodoroTimer from 'react-pomodoro-timer';
import axios from 'axios';

const App = () => {
  const [playlistId, setPlaylistId] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaylistSelect = (playlistId) => {
    setPlaylistId(playlistId);
  };

  const handleStartTimer = () => {
    setIsPlaying(true);

    axios.post('/play', { playlistId });
  };

  const handlePauseTimer = () => {
    setIsPlaying(false);

    axios.post('/pause');
  };

  return (
    <div>
      <h1>DevDance</h1>

      <select value={playlistId} onChange={(e) => handlePlaylistSelect(e.target.value)}>
        <option value="">Select a playlist</option>
        {spotifyPlaylists.map((playlist) => (
          <option key={playlist.id} value={playlist.id}>
            {playlist.name}
          </option>
        ))}
      </select>

      <PomodoroTimer
        isRunning={isPlaying}
        onStart={handleStartTimer}
        onPause={handlePauseTimer}
      />
    </div>
  );
};

export default App;