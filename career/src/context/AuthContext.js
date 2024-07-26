import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLogin } from '../services/api';
import { getRememberedUser, saveRememberedUser, clearRememberedUser } from '../services/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const rememberedUser = getRememberedUser();
      if (rememberedUser) {
        setUser(rememberedUser);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error retrieving remembered user:', error);
    }
  }, []);

  const login = async (email, password, rememberMe) => {
    try {
      const response = await mockLogin(email, password);
      if (response.success) {
        setUser(response.user);
        setIsLoggedIn(true);
        if (rememberMe) {
          saveRememberedUser(response.user);
        } else {
          clearRememberedUser();
        }
        navigate('/career');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    clearRememberedUser();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
