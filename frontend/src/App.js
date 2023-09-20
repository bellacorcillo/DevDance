import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/login';
import PostLogin from './components/PostLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postlogin/*" element={<PostLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
