import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import mainBackground from 'url(/mainbackground.jpg)'; // Import the background image

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        // Implement login logic here.
        navigate('/post-login'); // Navigate to the post-login page
    };

    return (
        <div className="login-container" style={{ backgroundImage: `url(${mainBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
