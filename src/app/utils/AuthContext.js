// context/AuthContext.js
"use client";
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
        console.log('Token found');
        console.log(token);
      // Validate the token with the backend
      validateToken(token).then(valid => {
        setIsAuthenticated(valid);
      });
    }else{
        console.log('No token found');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

async function validateToken(token) {
  try {
    const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}auth/validateToken`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log('Response:', response);
    return response.ok;
  } catch (error) {
    console.error('Error validating token:', error);
    return false;
  }
}
