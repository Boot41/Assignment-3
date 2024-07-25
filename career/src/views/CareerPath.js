import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCareerData, saveCareerDetails } from '../services/api';
import { getRememberedUser, saveRememberedUser } from '../services/auth';
import TextInput from '../components/TextInput'; // Ensure the correct path

function CareerPath({ isLoggedIn }) {
  const [careerDetails, setCareerDetails] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState('');
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
          setRememberMe(true);
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
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <TextInput
              type="text"
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
              <button 
                type="button" 
                onClick={() => handlePersonalitySelect('visionary')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Visionary
              </button>
              <button 
                type="button" 
                onClick={() => handlePersonalitySelect('performer')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Performer
              </button>
              <button 
                type="button" 
                onClick={() => handlePersonalitySelect('architect')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Architect
              </button>
              <button 
                type="button" 
                onClick={() => handlePersonalitySelect('writer')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Writer
              </button>
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </form>
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
