import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for user in localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      try {
        // Decode the token and set user state
        const decodedUser = jwtDecode(token); // Use jwtDecode to decode the token
        setUser(decodedUser);
      } catch (error) {
        console.error("Token is invalid:", error);
      }
    }
  }, []);
 
  //after a login do this
  const setAuthData = (authData) => {
    setUser(authData.user);
    localStorage.setItem('token', authData.token); // Store token in localStorage
  };

  //after logout do this
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
