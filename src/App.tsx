import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Child from "./Child";
import "./App.css";
type User = {
  id: String;
  name: String;
};
const mario = {
  id: "mario",
  name: "",
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const sir = (a: string, b) => {
    return { a, b };
  };

  sir(2, 3);

  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({} as String);
  // setCount("a")
  return (
    <>
      {numbers.map((number) => {
        return <Child count={number} />;
      })}
    </>
  );
}

export default App;
