import React, { useState } from 'react';

function CareerPath({ isLoggedIn }) {
  const [careerDetails, setCareerDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... (your API call logic)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
      {isLoggedIn && ( // Check if user is logged in
        <>
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Explain what your Dream Career Path Looks like
          </h1>
          <form onSubmit={handleSubmit}>
            <textarea
              className="border border-gray-300 rounded-md p-4 w-full max-w-md"
              placeholder="Describe your dream workspace, interests, and career goals"
              value={careerDetails}
              onChange={(e) => setCareerDetails(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default CareerPath;
