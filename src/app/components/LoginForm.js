import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import
import Cookies from 'js-cookie';

import './LoginForm.css'; // Import the CSS file for styling

function Login() {
    const router = useRouter(); // Initialize the router
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            console.log('Attempting to log in...');

            const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const { token, refreshToken } = await response.json();
                console.log('Login successful', token, refreshToken);

                // Store the tokens as needed, then redirect
                // localStorage.setItem('token', token);
                // localStorage.setItem('refreshToken', refreshToken);
                Cookies.set('token', token);
                Cookies.set('refreshToken', refreshToken);
                router.push('/restricted'); // Redirect to a protected page
            } else {
                console.error('Login failed');
                // Handle error, maybe show an error message to the user
            }
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
