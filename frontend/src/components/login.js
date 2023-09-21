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

        // Bind event handlers
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle input field changes
    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Handle form submission
    async handleSubmit(event) {
        event.preventDefault();

        try {
            // Send a POST request to the /login route with user credentials
            const response = await axios.post('http://localhost:5000/login', {
                email: this.state.email,
                password: this.state.password,
            });
            
            // Store the user token in local storage (you may want to use a more secure method)
            localStorage.setItem('token', response.data.token);

            // Redirect to the homepage or the desired location after successful login
            this.props.history.push('/home');
        } catch (error) {
            // Handle login error by setting an error message
            this.setState({ errorMessage: 'Login failed. Please check your credentials.' });
        }
    }

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

