import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListOfItem from "./ListOfItem";
import "./index.css";
import Counter from "./Counter";
const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1> <br></br>
          <input
            type="text"
            value={item}
            placeholder="Add an item"
            onChange={itemEvent}
          ></input>
          <Button onClick={listOfItems}>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
          </Button>
          {newItem.map((val, index) => {
            return <ListOfItem key={index} text={val}></ListOfItem>;
          })}
        </div>
      </div>
    </>
  );
};
export default ToDoList;
