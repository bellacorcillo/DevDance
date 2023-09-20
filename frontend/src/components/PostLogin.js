import React from 'react';
import "./PostLogin.css";
import mainBackground from 'url(/mainbackground.jpg)'; // Import the background image

function PostLogin() {
    return React.createElement('div', {
        className: 'post-login-container',
        style: {
            backgroundImage: `url(${mainBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    React.createElement('h2', null, 'Welcome, Friend!'),
    // Add your content for the post-login page here using React.createElement
    );
}

export default PostLogin;
