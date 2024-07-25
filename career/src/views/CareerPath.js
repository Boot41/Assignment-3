import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveCareerDetails } from '../services/api';
import { getRememberedUser, saveRememberedUser } from '../services/auth';
import TextInput from '../components/TextInput'; // Ensure the correct path

function CareerPath({ isLoggedIn }) {
  const [careerDetails, setCareerDetails] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const navigate = useNavigate();

  // Static career data (replace with your actual data)
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
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Explain what your Dream Career Path Looks Like
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <TextInput
          type="text"
          placeholder="Describe your dream workspace, interests, and career goals"
          value={careerDetails}
          onChange={(e) => setCareerDetails(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
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
              onClick={() => handlePersonalitySelect('visionary')}
              className={`py-2 px-4 rounded text-white font-bold ${selectedPersonality === 'visionary' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
            >
              Visionary
            </button>
            <button
              type="button"
              onClick={() => handlePersonalitySelect('performer')}
              className={`py-2 px-4 rounded text-white font-bold ${selectedPersonality === 'performer' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
            >
              Performer
            </button>
            <button
              type="button"
              onClick={() => handlePersonalitySelect('architect')}
              className={`py-2 px-4 rounded text-white font-bold ${selectedPersonality === 'architect' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
            >
              Architect
            </button>
            <button
              type="button"
              onClick={() => handlePersonalitySelect('writer')}
              className={`py-2 px-4 rounded text-white font-bold ${selectedPersonality === 'writer' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
            >
              Writer
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
      </div>
    </div>
  );
}

export default CareerPath;
