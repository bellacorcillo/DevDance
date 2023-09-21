import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        // Implement login logic here, e.g., making a POST request to your backend
        // Upon successful login, you can navigate to the post-login page
        navigate('/post-login');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;

