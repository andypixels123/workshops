import { useState } from "react";
import Button from "./components/Button";

// USE CASE - GALLERY NEXT AND PREVIOUS BUTTONS??

function App() {
  const [count, setCount] = useState(0);

  function handleNext() {
    if (count > 4) { setCount(0); } else { setCount(count + 1); }
  }

  function handlePrevious() {
    if (count < 1) { setCount(5); } else { setCount(count - 1); };
  }

  return (
    <>
      <p>Count: {count}</p>
      <span id="buttonContainer">
        <Button handler={handlePrevious} text="Previous" />
        <Button handler={handleNext} text="Next" />
      </span>
    </>
  );
}

export default App;
