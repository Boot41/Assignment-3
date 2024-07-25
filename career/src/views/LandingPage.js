import React from 'react';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
     <img src="./image_landing_page .webp" alt="Image of a man choosing his career path" className="w-1/2 mb-8" />
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        FIND THE PERFECT JOB YOU DESERVE
      </h1>
      <button
        type="button"
        className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
