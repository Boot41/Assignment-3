// src/views/SignupPage.js
import React, { useState } from 'react';
import { mockSignup } from '../services/api';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mockSignup(email, password);
      if (response.success) {
        console.log('Signup successful:', response.data);
        // Handle successful signup (e.g., redirect to login)
      } else {
        console.log('Signup failed:', response.message);
        // Handle signup failure
      }
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Signup</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
