import React from 'react';

function CareerFitAnalysis() {
  const chartData = [
    { label: 'Situation Judgement', me: 10, others: 15 },
    { label: 'Decision Making', me: 12, others: 14 },
    { label: 'Emotional Intelligence', me: 18, others: 12 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Career Fit Analysis</h2>
      <div className="grid grid-cols-2 gap-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex items-center">
            <p className="text-gray-600">{data.label}</p>
            <div className="flex-grow">
              <div className="bg-gray-300 h-4 rounded-full">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${(data.me / 25) * 100}%` }} />
              </div>
            </div>
            <p className="text-gray-600 ml-2">{data.others}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white rounded-full p-2">76%</div>
        <div className="ml-4 bg-gray-300 text-gray-700 rounded-full p-2">24%</div>
      </div>
    </div>
  );
}

export default CareerFitAnalysis;
