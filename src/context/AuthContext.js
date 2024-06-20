import React, { createContext, useState, useContext } from 'react';
import httpService from '../services/httpService';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(null);

  const login = async (email, password, rememberMe) => {
    try {
      const response = await httpService.post('/auth/login', { email, password, rememberMe });
      if (response.status === 200) {
        setIsAuthenticated(true);
        setAuthError(null);
      }
    } catch (error) {
      setAuthError(error.response?.data?.Message || 'Login failed');
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};
