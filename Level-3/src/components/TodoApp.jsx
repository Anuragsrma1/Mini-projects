import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleDelete = (deleteIndex) => {
    setTasks(tasks.filter((_, index) => index !== deleteIndex));
  };

  const handleToggle = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10">
      <h1 className="font-bold text-center text-2xl">✅ Todo App</h1>

      <div className="flex items-center mt-4 space-x-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow border rounded p-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="mt-6 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span
              onClick={() => handleToggle(index)}
              className={`cursor-pointer p-2 rounded border ${
                task.completed
                  ? 'bg-green-100 text-green-700 line-through'
                  : 'bg-white text-gray-800'
              }`}
            >
              {task.completed ? `✅ ${task.text}` : `❌ ${task.text}`}
            </span>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
