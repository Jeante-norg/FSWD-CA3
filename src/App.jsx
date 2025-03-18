import React from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import "./App.css"; // Import styles
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/list" element={<TaskList />} />
        <Route path="/form" element={<TaskForm />} />
      </Routes>
    </div>
  );
};

export default App;
