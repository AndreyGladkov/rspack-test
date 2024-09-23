import { lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
const Test = lazy(() =>
  import("./Test.tsx").then(({ Test }) => ({ default: Test }))
);
function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <Test />
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspacktest + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
