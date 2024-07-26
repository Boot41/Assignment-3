import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TaskPage() {
  const { task_id } = useParams();
  const [task, setTask] = useState(null);
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      // Fetch task data based on task_id
      const tasksFilePath = `/path/to/tasks/${task_id}-task.json`;
      try {
        const tasksResponse = await fetch(tasksFilePath);
        if (tasksResponse.ok) {
          const tasksJson = await tasksResponse.json();
          if (tasksJson.success) {
            const foundTask = tasksJson.data.tasks.find(t => t.task_id === task_id);
            setTask(foundTask || null);
          } else {
            console.error('Failed to fetch task data:', tasksJson.message);
          }
        } else {
          console.error('Failed to fetch task data:', tasksResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTask();
  }, [task_id]);

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleCompleteTask = () => {
    // Handle task completion logic here, e.g., saving the response
    navigate(`/schedule?careerPath=${task?.careerPath}`);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Task</h2>
      {task ? (
        <div>
          <div className="font-semibold">{task.task_name}</div>
          <p>{task.description}</p>
          <textarea
            placeholder="Provide your response here"
            className="w-full mt-2 p-2 border rounded"
            rows="4"
            value={response}
            onChange={handleResponseChange}
          />
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded"
            onClick={handleCompleteTask}
          >
            Complete Task
          </button>
        </div>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
}

export default TaskPage;
