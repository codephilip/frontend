"use client";
require('dotenv').config();
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file for styling

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async () => {
    try {
      console.log('Attempting to register user...');
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('User service URL:', process.env.REACT_APP_USER_SERVICE_URL);

      const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      console.log('Response:', response);
  
      // Rest of the code...
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Register User</h2>
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
      <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegistrationForm;
