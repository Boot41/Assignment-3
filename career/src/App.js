// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
  if (user) {
    navigate('/dashboard');
  }
}, []);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
