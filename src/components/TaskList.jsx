import React from "react";
import TaskItem from "./TaskItem.jsx";
import "./../App.css"; // Import styles
import { useNavigate } from "react-router-dom";

// Sample task data (Hardcoded)
const taskData = [
  {
    id: 1,
    title: "Complete Assignment",
    priority: "High",
    dueDate: "2025-03-20",
  },
  {
    id: 2,
    title: "Grocery Shopping",
    priority: "Medium",
    dueDate: "2025-03-22",
  },
  { id: 3, title: "Call the Bank", priority: "Low", dueDate: "2025-03-25" },
];

const TaskList = () => {
  const navigate = useNavigate();
  const handleclick1 = () => {
    navigate("/");
  };
  const handleClick2 = () => {
    navigate("/form");
  };
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {/* <button>Task List</button> */}
      <ul>
        {/* TODO: Use map() to display each task from taskData using TaskItem component */}
        {taskData.map((task) => {
          return (
            <TaskItem
              key={task.id}
              title={task.title}
              priority={task.priority}
              dueDate={task.dueDate}
            />
          );
        })}
      </ul>
      <button onClick={handleclick1}>Home</button>
      <br />
      <br />
      <button onClick={handleClick2}>add new task</button>
    </div>
  );
};

export default TaskList;


//Hi there
//hello