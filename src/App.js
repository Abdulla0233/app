import { useState } from "react";




function App() {
  const [a,seta] = useState(8)
  return (
    <div className="app">
      <h1>{a}</h1>
      <button onClick={() => seta((t)=>t*9)}>ADD</button>
      <button onClick={() => seta((t)=>t/9)}>SUB</button>
      <button onClick={() => seta((t)=>t+1)}>ADD</button>
      <button onClick={() => seta((t)=>t-1)}>SUB</button>
    </div>
  );
}

export default App;
