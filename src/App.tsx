import { useState } from "react";
import "./App.css";
import TestComp from "./components/TestComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        <TestComp count={count} />
      </p>
    </>
  );
}

export default App;
