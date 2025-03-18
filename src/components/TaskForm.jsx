import React from "react";
import "./../App.css"; // Import styles
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  // const handleSubmit = () => {

  // }
  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      {/* <button>Add new task</button> */}
      <form>
        {/* TODO: Add input field for Task Title */}
        <label htmlFor="name">Title</label>
        <input type="text" name="name" placeholder="Enter title" />
        <br />
        <br />
        <label htmlFor="priority">Priority</label>
        <input type="text" name="priority" placeholder="high/medium/low" />
        {/* <input type="text"/> */}
        <br />
        <br />
        {/* TODO: Add dropdown for Priority Level (High, Medium, Low) */}
        {/* TODO: Add input field for Due Date */}
        <label htmlFor="dueDate">Due Date: </label>
        <input type="date" name="dueDate" />
        {/* TODO: Add Submit Button */}
        <br />
        <br />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
        <br />
        <br />
        <button onClick={handleClick}>Home</button>
      </form>
    </div>
  );
};

export default TaskForm;
