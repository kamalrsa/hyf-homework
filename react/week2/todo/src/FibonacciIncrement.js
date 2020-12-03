import React from "react";
export function FibonacciIncrement(prop) {
  const increment = () => {
    prop.setFiboList((previous) => {
      // calling back to his parent
      // const lastNumber = previous[previous.length - 1];
      //const secondLastNumber = previous[previous.length - 2];
      //const nextFibonacci = lastNumber + secondLastNumber;
      //return [...previous, nextFibonacci];
      const fibFirst10 = [...previous];
      for (let i = previous.length; i < previous.length + 8; i++) {
        fibFirst10[i] = fibFirst10[i - 1] + fibFirst10[i - 2]; // recursive
      }
      return [...fibFirst10];
    });
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  );
}
