import React, { useEffect, useState } from 'react';

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});

  useEffect(() => {
    const fetchScheduleAndTasks = async () => {

      const careerPath = 'your-career-path';

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
  }, []); // Empty dependency array to run only once on component mount

  const handleTaskResponseChange = (taskId, response) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: response,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        {/* Header Section */}


        {/* Schedule Section */}
        <div className="mb-6 border rounded-lg shadow-md p-4 bg-yellow-50">
          <h2 className="text-xl font-bold mb-4 text-center text-red-600">Today's Schedule</h2>
          <ul className="list-none">
            {scheduleData.length > 0 ? (
              scheduleData.map((event) => (
                <li
                  key={event.event_id}
                  className={`mb-4 p-4 rounded-lg shadow-sm ${
                    completedTasks[event.event_id] ? 'bg-green-200' : 'bg-white'
                  } hover:bg-gray-100 transition-colors duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{event.event_name}</h3>
                      <p className="text-gray-600">{event.date}</p>
                      <p>{event.description}</p>
                    </div>
                    <div
                      className={`text-lg ${
                        completedTasks[event.event_id] ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {completedTasks[event.event_id] ? '✓' : '✗'}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-center">No schedule data available.</p>
            )}
          </ul>
        </div>

        {/* Tasks Section */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center text-red-600">Tasks and Descriptions</h2>
          <ul className="list-none">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <li
                  key={task.task_id}
                  className="mb-6 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold">{task.task_name}</h3>
                  <p>{task.description}</p>
                  <textarea
                    placeholder="Provide your response here"
                    className="border rounded p-2 w-full mt-2"
                    rows="4"
                    onChange={(e) => handleTaskResponseChange(task.task_id, e.target.value)}
                  />
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-center">No tasks available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
