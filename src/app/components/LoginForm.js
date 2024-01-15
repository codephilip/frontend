"use client";
require('dotenv').config();
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const userServiceUrl = process.env.REACT_APP_USER_SERVICE_URL;
    console.log('User Service URL:', userServiceUrl);

    const handleLogin = async () => {
        try {
            console.log('Attempting to log in...');
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('User service URL:', process.env.REACT_APP_USER_SERVICE_URL);

            // Authenticate user with your microservice...
            if (authenticationSuccessful) {
                // Redirect to restricted access page
                history.push('/restricted');
            }

            const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            console.log('Response:', response);
    
            // Rest of the code...
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <input
                className="text-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="text-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
