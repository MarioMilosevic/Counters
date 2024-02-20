
import React from 'react';

interface ChildProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Child: React.FC<ChildProps> = ({ count, increment, decrement }) => {
  return (
    <div className="childDiv">
      <button onClick={increment}>+</button>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Child;

