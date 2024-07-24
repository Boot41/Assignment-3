// src/views/LoginPage.js
import React, { useState, useEffect } from 'react';
import { mockLogin } from '../services/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // On component mount, check if user is in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setEmail(user.email);
      // Optionally redirect or auto-login
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mockLogin(email, password);
      if (response.success) {
        console.log('Login successful:', response.data);
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify({ email }));
        }
        // Handle successful login (e.g., save token, redirect user)
      } else {
        console.log('Login failed:', response.message);
        // Handle login failure
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle error
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Responsive form */}
      <form className="p-6 bg-white rounded shadow-md w-full md:w-1/3" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <label className="inline-flex items-center mb-4">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="form-checkbox"
          />
          <span className="ml-2">Remember Me</span>
        </label>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;