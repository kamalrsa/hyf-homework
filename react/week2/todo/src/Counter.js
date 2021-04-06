import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(1);
  React.useEffect(() => {
    setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  return (
    <div className="counter">
      You have used<div className="watch"></div>
      {counter} seconds in this web page
    </div>
  );
};
export default Counter;
