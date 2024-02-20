import { useState } from "react";
import Child from "./Child";
import "./App.css";
// type User = {
//   id: String;
//   name: String;
// };
// const mario = {
//   id: "mario",
//   name: "",
// };

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const [counts, setCounts] = useState(numbers);
  console.log(counts)


const incrementHandler = () => {
   setCounts((prev:{prev:any}) => prev + 1)
}
const decrementHandler = () => {
   setCounts((prev:{prev:any}) => prev - 1)
}

  return (
    <>
      {counts.map((count) => {
        return <Child count={count} increment={incrementHandler} decrement={decrementHandler} key={count}/>;
      })}
    </>
  );
}

export default App;
