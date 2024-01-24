import { useState } from "react";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>create akahn app</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
