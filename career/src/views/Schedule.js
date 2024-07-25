import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Schedule({ personality }) {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('/mockdata.json');
        setScheduleData(response.data[personality].schedule);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchSchedule();
  }, [personality]);

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
