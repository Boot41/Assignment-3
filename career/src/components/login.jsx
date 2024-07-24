// src/components/LoginForm.jsx
import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <form className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
        {/* Add form fields here */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
