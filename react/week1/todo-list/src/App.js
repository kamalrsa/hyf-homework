import React from "react";
import "./App.css";
import ToDoList from "./toDoList";
const toDo = [
  { description: "get out of bed", deadline: "wed sep 13 2017" },
  { description: "Brush Teeth", deadline: "Thu sep 13 2017" },
  { description: "Eat breakfast", deadline: "wed sep 13 2017" },
];
function App() {
  return (
    <div className="App">
      <ToDoList list={toDo}></ToDoList>
    </div>
  );
}

export default App;
