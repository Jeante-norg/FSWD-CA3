import React from "react";

const TaskItem = ({ title, priority, dueDate }) => {
  return (
    <li className="task-item">
      {/* TODO: Display task title, priority, and due date */}
      {/* <p>TaskList: {title}</p>
      <p>priority: {priority}</p>
      <p>due date: {dueDate}</p> */}

      <p>
        📌 {title} - {priority} - Due: {dueDate}
      </p>
    </li>
  );
};

export default TaskItem;
