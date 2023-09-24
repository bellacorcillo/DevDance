import React from 'react';
import Navbar from './Navbar';
import './PostLogin.css';

function PostLogin() {
  return (
    <div className="post-login-container">
      <Navbar /> {/* Render the Navbar component */}
      <header className="lord-of-the-rings-header">
        <h1>Welcome to Lembas Break 🍞🍃</h1>
        <p>Imagine the Pomodoro Technique as your own 'Lembas bread' in the world of productivity. Lembas, the Elven waybread, sustains the Fellowship on their perilous journey, just as the Pomodoro Technique sustains your focus during your work adventures. Like Lembas, the Pomodoro Technique offers a bite-sized approach to tasks. You work for a concentrated 'Pomodoro' session, akin to savoring a single piece of Lembas. These focused work intervals provide you with the energy and determination needed to conquer your tasks, much like Lembas provides strength to those who partake of it. However, even the heartiest travelers in Middle-earth need a moment to rest. Similarly, after each Pomodoro, you take a 'Hobbit-like' break. It's your chance to relax and recharge, just as the Fellowship paused to enjoy a moment of respite with Lembas. So, just as Frodo, Sam, and the others relied on Lembas bread to sustain them on their journey, the Pomodoro Technique is your trusted companion on the road to productivity, ensuring you stay focused and energized throughout your quest!</p>
      </header>
    </div>
  );
}

export default PostLogin;





