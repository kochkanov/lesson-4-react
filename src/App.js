

import {Button} from './component/Button'
import {Count} from './component/count/Count'
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(1)
  return (
    <div className="App">
      <Count counter={count}/>
     <Button setCount={setCount}title='+'/>
     <Button setCount={setCount} title='-'/>
    
    </div>
  );
}

export default App;
