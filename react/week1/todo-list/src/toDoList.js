import React from "react";
import ToDoItem from "./toDoItem"
const ToDoList = (props) => (
  <ul>
    {props.list.map((item) => (
      <ToDoItem list={item}><ToDoItem>
    ))}
  </ul>
);
export default ToDoList;
