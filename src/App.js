import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { Count } from "./Count";
import Form from "./Form";
import Conditional from "./Conditional";
function App() {
  // let [count, setCou9nt] = useState(1);
  const [state,setState] = useState('')
  const onLogHandler = (value) => {
    setState(value)
  };
  return (
    <div className="div">
      {/* <Count counter={count} /> */}
      <Form onLogHandler={onLogHandler} />
      <Conditional title={state}/>
      {/* <Button setCount={setCount} title='+' />
      <Button setCount={setCount} title='-' /> */}
    </div>
  );
}
export default App;
