import React from 'react';

function Schedule() {
  const scheduleData = [
    { time: '9AM', task: 'Business Meeting Preparation' },
    { time: '10AM', task: 'Proposal' },
    { time: '11:30AM', task: 'Team Meeting' },
    { time: '2:00PM', task: 'Business Call' },
    { time: '4:30PM', task: 'Performance Review' },
  ];

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Schedule</h2>
      <div className="grid grid-cols-2 gap-4">
        {scheduleData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-1/3">{item.time}</div>
            <div className="w-2/3">{item.task}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
