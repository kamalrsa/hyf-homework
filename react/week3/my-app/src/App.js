import React from "react";
import "./App.css";
import Shift from "./Shift";
import ToDoList from "./ToDoList";
import ApiFetch from "./ApiFetch";

function App() {
  return (
    <div className="App">
      <Shift></Shift>
      <ToDoList></ToDoList>
      <ApiFetch></ApiFetch>
    </div>
  );
}

export default App;
