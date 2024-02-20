import React, { useState } from "react";

interface ChildProps {
  count: number;
}

const Child: React.FC<ChildProps> = ({ count }) => {
  const [counter, setCounter] = useState(count);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="childDiv">
      <button onClick={increment}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Child;
