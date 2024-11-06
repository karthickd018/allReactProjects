import React, { useState } from "react";
import './app.css';

function A() {
  const [tasks, setTasks] = useState([]); // Initialize state for tasks
  const [input, setInput] = useState(""); // State for the task input

  // Function to add a new task to the list
  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]); // Add new task to the task list
      setInput(""); // Clear the input field after adding the task
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // Remove task at the given index
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state on change
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default A;
