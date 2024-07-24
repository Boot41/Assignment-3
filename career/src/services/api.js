// src/services/api.js
import axios from 'axios';

export const mockLogin = async (email, password) => {
  try {
    const response = await axios.get('/mocks/login-response.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching login response', error);
    throw error;
  }
};

export const mockSignup = async (email, password) => {
  try {
    const response = await axios.get('/mocks/signup-response.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching signup response', error);
    throw error;
  }
};
