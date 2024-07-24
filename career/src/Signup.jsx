// src/views/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await AuthService.signup({ email, password });
    if (response.success) {
      navigate('/login');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSignup} className="w-96 p-6 shadow-lg rounded-lg bg-white">
        <h1 className="text-2xl mb-4">Signup</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4" placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4" placeholder="Password" required />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
