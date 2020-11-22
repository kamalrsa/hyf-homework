import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState([0, 1]);
  const increment = () => {
    const x = state[state.length - 1];
    const y = state[state.length - 2];
    const z = x + y;
    setState([...state, z]); // spread current array elements, and then add the new ones.
  };
  return (
    <div>
      {state.map((num) => (
        <div>{num}</div>
      ))}
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default App;
