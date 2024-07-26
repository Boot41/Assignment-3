import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveCareerDetails } from '../services/api';
import { getRememberedUser, saveRememberedUser } from '../services/auth';

function CareerPath({ isLoggedIn }) {
  const [careerDetails, setCareerDetails] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const [scheduleData, setScheduleData] = useState(null);
  const navigate = useNavigate();

  const initialCareerData = {
    description: "Explain what you want to do by specifying your dream workspace environment, the tools you would use, and the type of projects you would work on.",
  };

  useEffect(() => {
    setDescription(initialCareerData.description);

    const rememberedUser = getRememberedUser();
    if (rememberedUser) {
      setCareerDetails(rememberedUser.careerDetails || '');
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (selectedPersonality) {
      fetch(`.mocks/${selectedPersonality}-schedule.json`)
        .then(response => response.json())
        .then(data => setScheduleData(data))
        .catch(error => console.error('Error fetching schedule:', error));
    }
  }, [selectedPersonality]);

  const handlePersonalitySelect = (personality) => {
    setSelectedPersonality(personality);
    // Navigate to the schedule page for the selected personality
    navigate(`/schedule?careerPath=${personality}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCareerDetails({ careerDetails });

    if (rememberMe) {
      saveRememberedUser({ careerDetails });
    }

    // Navigate to Schedule page with selected personality
    navigate(`/schedule?careerPath=${selectedPersonality}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500 flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Explain what your Dream Career Path Looks Like
      </h1>
      {/* Centered content container */}
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label className="text-gray-700">Remember Me</label>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-bold mb-2">Select Your Personality Type:</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handlePersonalitySelect('gamedesigner')}
                className="py-2 px-4 rounded text-white font-bold bg-blue-500 hover:bg-blue-700"
              >
                Game Designer
              </button>
              <button
                type="button"
                onClick={() => handlePersonalitySelect('actor')}
                className="py-2 px-4 rounded text-white font-bold bg-blue-500 hover:bg-blue-700"
              >
                Actor
              </button>
              <button
                type="button"
                onClick={() => handlePersonalitySelect('interiordesigner')}
                className="py-2 px-4 rounded text-white font-bold bg-blue-500 hover:bg-blue-700"
              >
                Interior Designer
              </button>
              <button
                type="button"
                onClick={() => handlePersonalitySelect('novelist')}
                className="py-2 px-4 rounded text-white font-bold bg-blue-500 hover:bg-blue-700"
              >
                Novelist
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
        <div className="mt-8 text-center">
          <h2 className="text-2xl text-white mb-4">Career Description:</h2>
          <p className="text-white">{description}</p>
          {scheduleData && (
            <div className="mt-8 p-4 bg-white rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Schedule Details:</h2>
              <pre>{JSON.stringify(scheduleData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerPath;
