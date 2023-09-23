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

        // Bind event handlers
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Add a new lifecycle method to load the account page
    async componentDidMount() {
        try {
            // Send a GET request to retrieve the account creation page
            const response = await axios.get('http://localhost:5000/create-account');
            this.setState({ isAccountPageLoaded: true });
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
            // Send a POST request to the /create-account route in the backend
            await axios.post('http://localhost:5000/create-account', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            });

            // Redirect to the login page or wherever you'd like after a successful registration
            this.props.history.push('/login');
        } catch (error) {
            this.setState({ errorMessage: 'Registration failed. Please try again.' });
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
