import React from 'react';
import axios from 'axios';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        try {
            
            const response = await axios.post('http://localhost:5000/login/', {
                email: this.state.email,
                password: this.state.password,
            });
            
            if(response.data.token){
                localStorage.setItem('token', response.data.token);
                console.log(response);
                window.location.href = '/postlogin';
            }
            else{
                this.setState({ errorMessage: 'Login failed. Please check your credentials.' });
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Error response from server:', error.response.data.message);
                this.setState({ errorMessage: `login failed: ${error.response.data.message}` });
              } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                this.setState({ errorMessage: 'login failed: No response from server' });
              } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error setting up the request:', error.message);
                this.setState({ errorMessage: `login failed: ${error.message}` });
              }
        }
    }
    // async handleSubmit(event) {
    //     event.preventDefault();
    
    //     try {
    //         const response = await axios.post('http://localhost:5000/login/', {
    //             email: this.state.email,
    //             password: this.state.password,
    //         });
    
    //         if (response.status === 200) {
    //             localStorage.setItem('token', response.data.token);
    //             this.props.history.push('/home');
    //         } else {
    //             this.setState({ errorMessage: 'Login failed. Please check your credentials.' });
    //         }
    //     } catch (error) {
    //         this.setState({ errorMessage: 'Login failed. Please check your credentials.' });
    //     }
    // }

    render() {
        return (
            <div className="login-container">
                <h2>Login</h2>
                {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required 
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;

