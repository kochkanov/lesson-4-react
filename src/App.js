import { Button } from "./component/Button";
import { Count } from "./component/count/Count";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  return <div className="App"></div>;
}

export default App;
