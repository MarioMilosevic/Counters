import { useState } from "react";
import Child from "./Child";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const [counts, setCounts] = useState(numbers);
  return (
    <>
      {counts.map((count) => {
        return <Child count={count} key={count} />;
      })}
    </>
  );
}

export default App;
