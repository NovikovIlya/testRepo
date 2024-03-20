import { useEffect, useState } from "react";
import "./App.css";
import TestComp from "./components/TestComp";

function App() {
  const [count, setCount] = useState(2);
  const obj = {};
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/5",
      );
      const data = await response.json();
      setCount(data.id);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="read-the-docs">
        <TestComp count={count} />
      </div>
    </>
  );
}

export default App;
