import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/postlogin">Home</Link> {/* Link to PostLogin.js */}
        </li>
        <li>
          <Link to="/timer">Timer</Link> {/* Link to TimerComponent.js */}
        </li>
        <li>
          <Link to="/stats">Stats</Link> {/* Link to StatsComponent.js */}
        </li>
        <li>
          <Link to="/break">Break Ideas</Link> {/* Link to BreakPage.js */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

