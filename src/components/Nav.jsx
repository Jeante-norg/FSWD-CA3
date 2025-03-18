import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const handleclick1 = () => {
    navigate("/form");
  };

  const handleClick2 = () => {
    navigate("/list");
  };
  return (
    <div>
      <h1>Task Mangement system</h1>
      <button onClick={handleclick1}>Taskform</button>
      <br />
      <br />
      <button onClick={handleClick2}>Tasklist</button>
    </div>
  );
}

export default Nav;
