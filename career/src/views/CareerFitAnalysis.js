import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CareerFitAnalysis({ personality }) {
  const [chartData, setChartData] = useState([]);
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await axios.get('/mockData.json');
        setChartData(response.data[personality].tasks);
        setAnalysis(response.data[personality].analysis);
      } catch (error) {
        console.error('Error fetching analysis data:', error);
      }
    };

    fetchAnalysis();
  }, [personality]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Career Fit Analysis</h2>
      <div className="grid grid-cols-2 gap-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex items-center">
            <p className="text-gray-600">{data.name}</p>
            <div className="flex-grow">
              <div className="bg-gray-300 h-4 rounded-full">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${(data.description.length / 100) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Analysis</h3>
        <p className="text-gray-700">{analysis}</p>
      </div>
    </div>
  );
}

export default CareerFitAnalysis;
