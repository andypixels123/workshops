# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Using Timers in React
Overview

Using setTimeout or setInterval in your component functions will not work as you might expect. setTimeout and setInterval functions are not aware of the React component lifecycle.

React components must be pure: they describe what the HTML looks like when given some data in props. Creating an interval for our counter is not pure: it has the side effect of incrementing the counter. Because we re-run our components every time the data changes, we would end up with multiple intervals running at the same time.

This serves as a good example for how and why we use the useEffect hook in React, and an introduction to the React component lifecycle.

Component functions must not have “side effects” like making fetch requests or setting timers. Because React components are regularly re-rendered, these side effects would be triggered multiple times. This would cause multiple fetch requests, or multiple timers. Not what we’d usually expect.

To resolve this, React allows us to hook into the component lifecycle and run code at specific times: When the component first is used, or when the component is removed from the page.

Understanding how useEffect allows us to manage timers in our components is a good way to understand how useEffect and the React component lifecycle works.
Class Plan

    Demo: useEffect and creating a timer in React components, and the effect of not cleaning up timers during unmount. How a custom effect can be used to create this functionality to reuse in our components.
    Workshop: Using useEffect to correctly create and remove timers in React components and creating a custom hook to reuse this functionality.

Learning Objectives

    useEffect
    setInterval in React components
    the React component lifecycle

Success Criteria

    I can explain in my own words the component lifecycle in React and its stages.
    I can give a definition of what an effect is.
    I can explain why a timer qualifies as an effect.
    I can manage a timer using the useEffect hook.
    “Add your own personal success criterion.”

Resources

    the Lifecycle of Reactive Effects
    useEffect hook

Workshop
Using useEffect on component mount

the useEffect hook with an empty dependency array will run the callback function once a component is mounted. We’re going to make two components: <TimerDirty /> and <TimerClean /> and use these to demonstrate what’s happening with useEffect in your components.

⛳️ Create a new React app with vite: npx create-vite example-use-effect-timer --template react
⛳️ Create a new component file called TimerDirty.jsx and add the following code to create an interval timer:

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

⛳️ Add the <TimerDirty /> component to your App.jsx file and see what happens when you run the app in the browser.

👀 Notice that the counter increments by 2 each second, instead of 1. Check the console to see the order of events as they occur 🤯

💭 This is because the setInterval function is not aware of the React component lifecycle. When the component is re-rendered (which by default will happen twice in development), the setInterval function is called again, creating a new interval timer. The old interval timer is still running, so we end up with two timers running at the same time.

⛳️ Save the DirtyTimer.jsx file and observe the behaviour of the counter.
⛳️ Save DirtyTimer.jsx again. Notice that the timer quickly gets out of control and increments faster and faster.

💭 Saving the file triggers a re-render (to reflect your change in the file). This created a new timer, without removing the old one. We then have three, then four, then five timers, all updating the state by incrementing it by one. This cascades out of control.

⛳️ Stop the app and remove the <TimerDirty /> component from your App.jsx file.
Using useEffect to clean up timers

⛳️ Create a new component file called TimerClean.jsx and add the following code to create an interval timer:

import React, { useState, useEffect } from "react";

export function TimerClean() {
  console.log("TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}

⛳️ Add the <TimerClean /> component to your App.jsx file and see what happens when you run the app in the browser.

👀 Notice that the counter increments by 1 each second, as expected. Check the console to see the order of events as they occur.

💭 useEffect created the interval. We remembered the intervalId in a variable called interval. This allows us to clear it out when the component is unmounted, which always happens before re-rendering the component. Understanding this feature is important for understanding how useEffect works, and how components mount and unmount during development, and during other events like page navigation or state updates (which also cause the component to re-render).

⛳️ Save the TimerClean.jsx file and observe the behaviour of the counter. It still works as expected.

⛳️ Render both the <TimerDirty /> and <TimerClean /> components in App.jsx and compare the behaviour of the counter and the console logs shown for each component.

💭 Making sense of the order of events here is important for understanding what useEffect does and how it interacts with the component lifecycle.



///////////////////////// BOOKMARK, continue from here at my discretion ---> stretch code ///////////////////////////

Custom Timer Hook

Using useEffect and useState to manage a counter like this is a common pattern. How we use the counter value might change, but how the timer is created and cleaned up is always the same. We can create a custom hook to combine these two pieces of functionality so it can be reused in other components. This custom hook would allow us to create a timer in any component and have it manage it’s own cleanup.

The custom hook manages the state and the effect for us, and returns the final value of the counter state after it has been incremented. We can render this value in our component. This might seem complicated, but it’s a common pattern and understanding how this works will be very useful to allow you to separate out complex logic into reusable pieces to use throughout your apps.

⛳️ Create a new file called useTimer.js and add the following code:

import { useState, useEffect } from "react";

export function useTimer() {
  console.log("useTimer hook called");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useTimer hook useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("useTimer hook useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return count;
}

⛳️ Import the useTimer hook into your App.jsx file and use it to create a timer:

import { useTimer } from "./useTimer";

export function App() {
  const count = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <div>Count: {count}</div>
    </div>
  );
}

⛳️ Run the app and observe the behaviour of the counter.

⛳️ Create a new component called Timer.jsx and use the useTimer hook to create a timer:

import { useTimer } from "./useTimer";

export function Timer() {
  const count = useTimer();

  return <div>Count: {count}</div>;
}

⛳️ Add the <Timer /> component to your App.jsx file and see what happens when you run the app in the browser.

👀 Notice that the counter increments by 1 each second, as expected. Check the console to see the order of events as they occur.

