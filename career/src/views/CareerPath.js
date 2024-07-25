import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCareerData, saveCareerDetails } from '../services/api';
import { getRememberedUser, saveRememberedUser } from '../services/auth';

function CareerPath({ isLoggedIn }) {
  const [careerDetails, setCareerDetails] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState(''); // Add state for selected personality
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const data = await getCareerData();

        // Assuming you want to use the first scenario for testing
        const scenario = data.find(desc => desc.personality === 'Personality 1');
        
        if (scenario) {
          setDescription(scenario.description);
          setCareerDetails(scenario.description);
        }
        
        const rememberedUser = getRememberedUser();
        if (rememberedUser) {
          setCareerDetails(rememberedUser.careerDetails || '');
          setRememberMe(true); // Set rememberMe if there are saved details
        }
      } catch (error) {
        console.error('Error fetching career data:', error);
      }
    };

    fetchCareerData();
  }, []);

  const handlePersonalitySelect = (personality) => {
    setSelectedPersonality(personality);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCareerDetails({ careerDetails });

    if (rememberMe) {
      saveRememberedUser({ careerDetails });
    }

    // Navigate to Schedule page with selected personality
    navigate(`/schedule?personality=${selectedPersonality}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
      {isLoggedIn ? (
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
            <div className="mt-4">
              {/* Add options for selecting personality */}
              <button 
                type="button" 
                onClick={() => handlePersonalitySelect('visionary')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Visionary
              </button>
              <button 
                type="button" 
                onClick={() => handlePersonalitySelect('otherPersonality')} // Add other personalities as needed
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Other Personality
              </button>
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </form>
          {/* Displaying the specific scenario's description */}
          <div className="mt-8">
            <h2 className="text-2xl text-white mb-4">Career Description:</h2>
            <p className="text-white">{description}</p>
          </div>
        </>
      ) : (
        <p className="text-white">Please log in to access this page.</p>
      )}
    </div>
  );
}

export default CareerPath;
