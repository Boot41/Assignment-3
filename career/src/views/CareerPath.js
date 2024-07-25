import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCareerData, saveCareerDetails } from '../services/api';
import { getRememberedUser, saveRememberedUser } from '../services/auth';

function CareerPath({ isLoggedIn }) {
  const [careerDetails, setCareerDetails] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const data = await getCareerData();
        // No longer using careerData, so this is removed
        // setCareerData(data);
      } catch (error) {
        console.error('Error fetching career data:', error);
      }
    };

    fetchCareerData();

    const rememberedUser = getRememberedUser();
    if (rememberedUser) {
      setCareerDetails(rememberedUser.careerDetails);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCareerDetails(careerDetails);

    if (rememberMe) {
      saveRememberedUser({ careerDetails });
    }

    navigate('/schedule');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
      {isLoggedIn && (
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
            <div className="flex items-center mt-4">
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
