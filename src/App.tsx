import Child from "./Child";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  return (
    <>
      {numbers.map((count) => {
        return <Child count={count} key={count} />;
      })}
    </>
  );
}

export default App;
