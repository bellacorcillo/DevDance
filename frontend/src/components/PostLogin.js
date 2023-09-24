import React from 'react';
import Navbar from './Navbar';
import './PostLogin.css';

function PostLogin() {
  return (
    <div className="post-login-container">
      <Navbar /> {/* Render the Navbar component */}
      <header className="lord-of-the-rings-header">
        <h1>Welcome to Lembas Break 🍞🍃</h1>
        <p>Think of the Pomodoro Technique as your productivity Lembas bread. Just like Lembas sustains the Fellowship on their journey, the Pomodoro Technique fuels your focus during work. You work in concentrated 'Pomodoro' sessions, like enjoying a piece of Lembas. These focused intervals give you the strength to conquer tasks. After each Pomodoro, take a 'Hobbit-like' break to recharge, just as the Fellowship did with Lembas. Like Frodo and Sam relied on Lembas, the Pomodoro Technique is your trusted productivity companion, keeping you focused and energized on your quest!</p>
      </header>
    </div>
  );
}

export default PostLogin;





