import React, { useState } from 'react';

function TaskPage({ tasks }) {
  const [taskResponses, setTaskResponses] = useState({});

  const handleResponseChange = (taskId, response) => {
    setTaskResponses(prevResponses => ({
      ...prevResponses,
      [taskId]: response
    }));
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.task_id} className="mb-4">
            <div className="font-semibold">{task.task_name}</div>
            <p>{task.description}</p>
            <textarea
              placeholder="Provide your response here"
              className="w-full mt-2 p-2 border rounded"
              rows="4"
              onChange={(e) => handleResponseChange(task.task_id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
