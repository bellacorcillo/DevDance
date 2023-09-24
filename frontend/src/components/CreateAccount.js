import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateAccount.css';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:5000/create-account');
            this.setState({ isAccountPageLoaded: true });
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
            
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    async handleSubmit(event) {
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ errorMessage: 'Passwords do not match.' });
            return;
        }

        try {
            await axios.post('http://localhost:5000/createaccount/create-account', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            });

            window.location.href = '/login';
        } catch (error) {
            if (error.response) {
                console.error('Error response from server:', error.response.data);
                this.setState({ errorMessage: `Registration failed: ${error.response.data.message}` });
              } else if (error.request) {
                console.error('No response received:', error.request);
                this.setState({ errorMessage: 'Registration failed: No response from server' });
              } else {
                console.error('Error setting up the request:', error.message);
                this.setState({ errorMessage: `Registration failed: ${error.message}` });
              }
        }
    }

    render() {
        return (
            <div className="create-account-container">
                <h2>Create Account</h2>
                {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
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
                    <div className="input-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        );
    }
}

export default CreateAccount;
