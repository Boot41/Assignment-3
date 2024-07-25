import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLogin } from '../services/api';
import { saveRememberedUser, clearRememberedUser } from '../services/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await mockLogin(email, password);
    if (response.success) {
      if (rememberMe) {
        saveRememberedUser({ email });
      } else {
        clearRememberedUser();
      }
      // Redirect to career path page
      navigate('/career');
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <input
            type="email"
            className="border border-gray-300 rounded-md p-4 w-full max-w-md"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="border border-gray-300 rounded-md p-4 w-full max-w-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label className="text-white">Remember Me</label>
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
