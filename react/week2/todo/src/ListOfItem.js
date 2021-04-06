import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const ListOfItem = (prop) => {
  const [line, setLine] = useState(false);
  const deleteItem = () => {
    setLine(true);
  };
  return (
    <div>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {prop.text}
        <DeleteIcon onClick={deleteItem}></DeleteIcon>
      </li>
    </div>
  );
};
export default ListOfItem;
