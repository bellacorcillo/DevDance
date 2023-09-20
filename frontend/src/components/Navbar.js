import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/postlogin">Home</Link>
        </li>
        <li>
          <Link to="/postlogin/timer">Timer</Link>
        </li>
        <li>
          <Link to="/postlogin/stats">Stats</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;