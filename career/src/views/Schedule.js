import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});
  const [analysis, setAnalysis] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const careerPath = queryParams.get('careerPath'); // Get career path from query parameter
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const fetchScheduleAndTasks = async () => {
      if (!careerPath) {
        console.error('No career path provided');
        return;
      }

      // Fetch schedule data
      const scheduleFileName = `${careerPath}-schedule.json`;
      const scheduleFilePath = `/path/to/schedules/${scheduleFileName}`;

      try {
        const scheduleResponse = await fetch(scheduleFilePath);
        if (scheduleResponse.ok) {
          const scheduleData = await scheduleResponse.json();
          setScheduleData(scheduleData.schedule || []);
          setAnalysis(scheduleData.analysis || '');
        } else {
          console.error('Failed to fetch schedule data:', scheduleResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }

      // Fetch tasks data
      const tasksFileName = `${careerPath}-task.json`;
      const tasksFilePath = `/path/to/tasks/${tasksFileName}`;

      try {
        const tasksResponse = await fetch(tasksFilePath);
        if (tasksResponse.ok) {
          const tasksData = await tasksResponse.json();
          setTasks(tasksData.data.tasks || []);
        } else {
          console.error('Failed to fetch tasks data:', tasksResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching tasks data:', error);
      }
    };

    fetchScheduleAndTasks();
  }, [careerPath]);

  const handleTaskResponseChange = (taskId, response) => {
    // Handle task response change, e.g., save to local state or API
    // For demo purposes, we'll mark the task as completed in local state
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: true,
    }));
  };

  const handleTaskClick = (task) => {
    // Navigate to the task page (implementation needed)
    navigate(`/tasks/${task.task_id}`);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Schedule and Tasks for {careerPath}</h2>
      <div className="grid grid-cols-2 gap-4">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-4 rounded cursor-pointer transition-colors ${
              completedTasks[item.task_id] ? 'bg-green-200' : 'bg-white hover:bg-gray-100'
            }`}
            onClick={() => handleTaskClick(item)}
          >
            <div className="w-1/3">{item.time}</div>
            <div className="w-2/3">{item.task}</div>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mt-6">Tasks and Descriptions</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.task_id} className="mb-4">
            <div className="font-semibold">{task.task_name}</div>
            <p>{task.description}</p>
            <textarea
              placeholder="Provide your response here"
              className="w-full mt-2 p-2 border rounded"
              rows="4"
              onChange={(e) => handleTaskResponseChange(task.task_id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-6">Analysis</h3>
      <p>{analysis}</p>
    </div>
  );
}

export default Schedule;
