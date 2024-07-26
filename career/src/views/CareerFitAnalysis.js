import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CareerFitAnalysis() {
  const [analysisData, setAnalysisData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const careerPath = queryParams.get('careerPath') || 'default'; // Default to 'default' if no careerPath is provided

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/path/to/your/json/${careerPath}.json`);
        const data = await response.json();
        if (data.success) {
          setAnalysisData(data.data);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [careerPath]);

  if (!analysisData) {
    return <div>Loading...</div>;
  }

  const { user, comparison } = analysisData;

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14l2-2 4 4m6-6l-2-2-4 4"></path></svg>
          <span className="text-lg font-medium">{user.name}</span>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">HOME</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">SCHEDULE</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">TASKS</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">ANALYSIS</button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Career Fit Analysis</h2>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-2 bg-gray-300 rounded-full"></div>
            <div className="ml-2">Situation Judgement</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-2 bg-gray-300 rounded-full"></div>
            <div className="ml-2">Decision Making</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-2 bg-gray-300 rounded-full"></div>
            <div className="ml-2">Emotional Intelligence</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center text-gray-700 font-bold text-2xl">{comparison[0].percentage_above_average}%</div>
          <div className="text-gray-500">Others</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center text-gray-700 font-bold text-2xl">{100 - comparison[0].percentage_above_average}%</div>
          <div className="text-gray-500">Me</div>
        </div>
      </div>
    </div>
  );
}

export default CareerFitAnalysis;
