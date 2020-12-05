import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListOfItem from "./ListOfItem";
const ToDoList = () => {
  const [item, setItem] = useState({
    toDo: "",
    deadline: "",
  });
  const [newItem, setNewItem] = useState([]);
  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setItem((preValue) => {
      if (name === "toDo") {
        return {
          toDo: value,
          deadline: preValue.deadline,
        };
      } else if (name === "deadline") {
        return {
          toDo: preValue.toDo,
          deadline: value,
        };
      }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    setNewItem((preValue) => {
      return [...preValue, item];
    });
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>ToDo List</h1> <br></br>
          ToDo Description:
          <input
            type="text"
            placeholder="Add todo list"
            name="toDo"
            onChange={inputEvent}
            value={item.toDo}
          ></input>
          <br></br>
          Deadline:
          <input
            type="Date"
            name="deadline"
            onChange={inputEvent}
            value={item.deadline}
          ></input>
          <Button onClick={onSubmits}>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
          </Button>
          {newItem.map((val, index) => {
            return <ListOfItem key={index} text={val}></ListOfItem>;
          })}
        </div>
      </form>
    </>
  );
};
export default ToDoList;
