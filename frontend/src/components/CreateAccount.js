import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleAccountCreation = () => {
        // Implement account creation logic here, e.g., making a POST request to your backend
        // Upon successful account creation, you can navigate to the post-login page
        navigate('/post-login');
    };

    return (
        <div>
            <h2>Create Account</h2>
            <input 
                type="text" 
                placeholder="Display Name" 
                value={displayName} 
                onChange={(e) => setDisplayName(e.target.value)}
            />
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
            <button onClick={handleAccountCreation}>Create Account</button>
        </div>
    );
}

export default CreateAccount;
