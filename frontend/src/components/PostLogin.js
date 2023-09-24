import React from 'react';
import "./PostLogin.css";

function PostLogin() {
    return React.createElement('div', {
        className: 'post-login-container',
        style: {
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
    );
}

export default PostLogin;
