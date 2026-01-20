
import './App.css'
import { useState } from "react";

function App() {
  const initialState = 0;
  const [myCount, setMyCount] = useState(initialState);
  const [myCount2, decMyCount] = useState(initialState);

  const resetState = () => {
    setMyCount(initialState);
    decMyCount(initialState);
  };

  function incrementCount() {
    setMyCount(myCount + 1);
  }

  function decrementCount() {
    decMyCount(myCount2 - 1);
  }

  return (
    <div>
      <p onClick={resetState}>{myCount}</p>
      <button onClick={incrementCount}>Increment Counter</button>
      {/* Same as: button.addEventListener('click', incrementCount) */}
      <p onClick={resetState}>{myCount2}</p>
      <button onClick={decrementCount}>Decrement Counter</button>
      {/* Same as: button.addEventListener('click', decrementCount) */}
    </div>
  );
}

export default App;