import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={homePageStyle}>
            <h1>Welcome to the Home Page!</h1>
            <p>Here, you can explore the amazing world of Middle-earth!</p>            
            <button onClick={() => navigate('/logout')}>Logout</button>
        </div>
    );
}

const homePageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
};

export default HomePage;
