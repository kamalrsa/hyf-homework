import React from "react";
const Sub = (props) => {
  return (
    <div>
      Total Hours = ({props.text.eTime}-{props.text.sTime});
    </div>
  );
};
export default Sub;
