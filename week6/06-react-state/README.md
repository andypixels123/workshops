# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



========================================================
WORKSHOP ===============================================
========================================================


React State and Events: Updating state with user interaction
Overview

State is one of the core concepts of client side React. State is data that is stored in a component, and can be changed by the component. When state changes, the component re-renders.

State is used to store data that changes over time. The number of cookies in the Cookie Clicker game is an example of state. The number changes over time, and the components that show the number of cookies need to update when that happens.
Class Plan

    Demo: Using the useState hook to store state in a React component
    Workshop: Build a React component that uses state to store data

Learning Objectives

    JSX, Components and Props
    Hooks and State
    Handling Events

Success Criteria

    I can explain in my own words what state is.
    I can explain the difference between global scope and function scope.
    I can implement state in React using the useState hook.
    I can pass state as a prop to other components.
    “Add your own personal success criterion.”

Required Knowledge

    HTML, CSS, JavaScript
    React: JSX, Components, Props

Resources

    React: Built-in React Hooks
    React: The useState Hook
    Legacy React: Rules of Hooks
    Modern React: Rules of Hooks
    State: A Component’s Memory



Workshop
The useState Hook

The useState hook is used to store state in React components. It’s a function that returns an array with two values: the current state value, and a function to update the state value.

It looks like this:

import { useState } from "react";

export default function App() {
  const [myState, setMyState] = useState(0);
  return <div>{myState}</div>;
}

Updating State

The function returned by the useState hook is used to update the state value. It can be called with a new value, or a function that returns a new value.

import { useState } from "react";

export default function App() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  return (
    <div>
      <p>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      {/* Same as: button.addEventListener('click', incrementCounter) */}
    </div>
  );
}

🎯 Create a react app that has a state variable that increases on the click of a button
🎯 Try adding a button that decreases the number on click
🎯 Add an event listener that resets the number to 0 when you click the number itself

