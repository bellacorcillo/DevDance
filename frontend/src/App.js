import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/login';
import CreateAccount from './components/CreateAccount';
import PostLogin from './components/PostLogin';
import TimerComponent from './components/TimerComponent';
import BreakPage from './components/BreakPage'; // Import the BreakPage component

function App() {
  const appStyle = {
    backgroundImage: 'url(/mainbackground.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/post-login/*" element={<PostLogin />} />
          <Route path="/timer" element={<TimerComponent />} />
          <Route path="/break" element={<BreakPage />} /> {/* Add this route for the BreakPage component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

