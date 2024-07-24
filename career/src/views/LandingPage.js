import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        FIND THE PERFECT JOB YOU DESERVE
      </h1>
      <button
        type="button"
        className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
