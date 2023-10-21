
import { useState } from "react";

function Home() {
  const [a,seta] = useState(10)

    return (
    <div className="app">
      <h1>{a}</h1>
      <button onClick={() => seta((t)=>t+5)}>+</button>
      <button onClick={() => seta((t)=>t-5)}>-</button>
    </div>
    )

}
export default Home;
