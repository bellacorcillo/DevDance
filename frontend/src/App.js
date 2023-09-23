import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import CreateAccount from './components/CreateAccount';
import Login from './components/login';
import PostLogin from './components/PostLogin';
import TimerComponent from './components/TimerComponent';
import BreakPage from './components/BreakPage';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const appStyle = {
    backgroundImage: 'url(/mainbackground.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  const getUserList = async () => {
    const response = await axios.get('/create-account'); 
    const users = response.data;
    return users;
  };

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const users = await getUserList();
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div style={appStyle}>
        <Routes>
          <Route path="/" element={<MainPage users={users} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/post-login/*" element={<PostLogin />} />
          <Route path="/timer" element={<TimerComponent />} />
          <Route path="/break" element={<BreakPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

