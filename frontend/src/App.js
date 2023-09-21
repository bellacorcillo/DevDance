import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/login';
import CreateAccount from './components/CreateAccount'; // Add this import
import PostLogin from './components/PostLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} /> {/* Add this route */}
        <Route path="/post-login/*" element={<PostLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

