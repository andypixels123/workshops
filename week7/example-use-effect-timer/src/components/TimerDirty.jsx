import React, { useState, useEffect } from "react";

export function TimerDirty() {
  console.log("TimerDirty component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerDirty component useEffect callback");
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}