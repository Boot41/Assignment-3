import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const careerPath = queryParams.get('careerPath');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScheduleAndTasks = async () => {
      if (!careerPath) {
        console.error('No career path provided');
        return;
      }

      // Fetch schedule data
      const scheduleFileName = `${careerPath}-schedule.json`;
      const scheduleFilePath = `/mocks/${scheduleFileName}`;

      try {
        const scheduleResponse = await fetch(scheduleFilePath);
        if (scheduleResponse.ok) {
          const scheduleJson = await scheduleResponse.json();
          if (scheduleJson.success) {
            setScheduleData(scheduleJson.data.schedule || []);
          } else {
            console.error('Failed to fetch schedule data:', scheduleJson.message);
          }
        } else {
          console.error('Failed to fetch schedule data:', scheduleResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }

      // Fetch tasks data
      const tasksFileName = `${careerPath}-task.json`;
      const tasksFilePath = `/mocks/${tasksFileName}`;

      try {
        const tasksResponse = await fetch(tasksFilePath);
        if (tasksResponse.ok) {
          const tasksJson = await tasksResponse.json();
          if (tasksJson.success) {
            setTasks(tasksJson.data.tasks || []);
          } else {
            console.error('Failed to fetch tasks data:', tasksJson.message);
          }
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
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: response,
    }));
  };

  const handleTaskClick = (taskId) => {
    navigate(`/tasks/${taskId}`);
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4 mb-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">CareExpo</h1>
      </header>

      {/* Schedule Section */}
      <div className="mb-6 border rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Today's Schedule</h2>
        <ul className="list-none">
          {scheduleData.length > 0 ? (
            scheduleData.map((event) => (
              <li
                key={event.event_id}
                className={`mb-4 p-4 rounded-lg shadow-sm hover:bg-gray-100 ${
                  completedTasks[event.event_id] ? 'bg-green-200' : 'bg-white'
                }`}
              >
                <h3 className="text-lg font-semibold">{event.event_name}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p>{event.description}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No schedule data available.</p>
          )}
        </ul>
      </div>

      {/* Tasks Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Tasks and Descriptions</h2>
        <ul className="list-none">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task.task_id}
                className="mb-6 p-4 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold">{task.task_name}</h3>
                <p>{task.description}</p>
                <textarea
                  placeholder="Provide your response here"
                  className="border rounded p-2 w-full mt-2"
                  rows="4"
                  onChange={(e) => handleTaskResponseChange(task.task_id, e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                  onClick={() => handleTaskClick(task.task_id)}
                >
                  View Details
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No tasks available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Schedule;
