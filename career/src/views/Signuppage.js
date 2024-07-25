import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { mockLogin } from '../services/api';

function Signuppage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Handle form submission logic here
    try {
      // Assuming mockLogin is an API call function
      const response = await mockLogin({ name, email, password, dateOfBirth });

      // Save response to a JSON file (Frontend only)
      const blob = new Blob([JSON.stringify(response)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'signup-response.json';
      a.click();
      URL.revokeObjectURL(url);

      // After successful form submission, navigate to the landing page
      navigate('/landing'); // Use '/landing' or your target route
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto shadow-sm rounded-lg overflow-hidden bg-gray-50">
          <div className="text-center p-6">
            <h1 className="text-xl font-bold text-gray-700">Create New Account</h1>
          </div>
          <div className="px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-gray-700 block mb-2" htmlFor="name">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jiara Martins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 block mb-2" htmlFor="email">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@reallygreatsite.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 block mb-2" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 block mb-2" htmlFor="dateOfBirth">
                  DATE OF BIRTH
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="shadow appearance-none border rounded-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
