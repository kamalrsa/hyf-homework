import React from "react";
const ListOfResult = (props) => {
  return (
    <>
      <div>
        {props.text.description}
        {props.text.deadline}
      </div>
    </>
  );
};
export default ListOfResult;
