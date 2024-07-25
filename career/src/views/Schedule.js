import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [analysis, setAnalysis] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const personality = queryParams.get('personality');

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('/mockdata.json');
        const data = response.data;
        if (data[personality]) {
          setScheduleData(data[personality].schedule);
          setTasks(data[personality].tasks);
          setAnalysis(data[personality].analysis);
        } else {
          console.error('No data found for the given personality');
        }
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchSchedule();
  }, [personality]);

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Schedule for {personality}</h2>
      <div className="grid grid-cols-2 gap-4">
        {scheduleData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-1/3">{item.time}</div>
            <div className="w-2/3">{item.task}</div>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mt-6">Tasks and Descriptions</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong>: {task.description}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-6">Analysis</h3>
      <p>{analysis}</p>
    </div>
  );
}

export default Schedule;
