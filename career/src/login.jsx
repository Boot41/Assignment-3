// src/views/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await AuthService.login({ email, password, rememberMe });
    if (response.success) {
      navigate('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-96 p-6 shadow-lg rounded-lg bg-white">
        <h1 className="text-2xl mb-4">Login</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4" placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4" placeholder="Password" required />
        <div className="flex items-center mb-4">
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <label className="ml-2">Remember Me</label>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;
