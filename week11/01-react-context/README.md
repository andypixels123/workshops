
React Context
Overview

Passing your data and functions around your application as props is a great way to start and makes sense for simple applications.

As your application grows, it can be hard to ensure you can pass the right props to the right components, and you can end up with a lot of “prop drilling” where you pass props through multiple components to get to where you need them.

React Context is a way to share data and functions across your application without having to pass props through multiple components.

It sounds complicated or magical, but understanding Context will help you simplify your application code, organise functionality in one place, and make it easier to maintain.
Class Plan

    Demo: Creating a context and using it in components
    Workshop: Create a context and use it in components

Learning Objectives

    What is React Context?
    How to create a context
    How to use a context in a component
    How to update a context

Success Criteria

    I can give a definition of what context is.
    I can give examples of the benefits of using context in a React app.
    I can manage state by creating a context using createContext, the useContext hook and the Provider component.
    “Add your own personal success criterion.”

Required Knowledge

    JavaScript
    React
    JSX
    HTML
    CSS
    React components
    React props

Resources

    React Context

Workshop
What is React Context?

React Context is a way to share data and functions across different components in your application without having to pass props through multiple components manually.
How to create a context

⛳️ Create a new file called UserContext.js and add the following code:

import { createContext } from "react";

export const UserContext = createContext();

Create a provider for the User Context

Each new context comes with a Provider component that you can use to wrap your application, it ensures the data in the context is available to all components below it in the tree.

⛳️ Export a custom UserProvider component from UserContext.js:

import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value=>
      {children}
    </UserContext.Provider>
  );
}

Use the UserProvider in your App component

By wrapping the app in the UserProvider we ensure all components can find the data it provides.

⛳️ Import the UserProvider into your App component and wrap the Routes component with it:

import { UserProvider } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider> // <-- Add this
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
      </UserProvider> // <-- and this
    </BrowserRouter>
  );
}

Use the UserContext in a component

Now that we have a context, we can use it in our components.

⛳️ Import the UserContext into your UserPage component and use the useContext hook to access the data in the context:

import { useContext } from "react";

import { UserContext } from "./UserContext";

export function UserPage() {
  let { username } = useContext(UserContext);
  return <h2>User ID: {username}</h2>;
}

Update the UserContext

We can also update the data in the context from any component.

⛳️ Add a setUsername function to the UserContext:

import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("bob");
  return (
    <UserContext.Provider value=>
      {children}
    </UserContext.Provider>
  );
}

⛳️ Import the UserContext into your UserPage component and use the useContext hook to access the data in the context:

import { useContext } from "react";

import { UserContext } from "./UserContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change username to spongebob
      </button>
    </>
  );
}

Using multiple contexts

You can use multiple contexts in your application, just create a new context and provider for each one.

⛳️ Create a new context for the user’s theme:

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value=>
      {children}
    </ThemeContext.Provider>
  );
}

⛳️ Import the ThemeProvider into your App component and wrap the Routes component with it:


import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider> // <-- Add this
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:username" element={<UserPage />} />
          </Routes>
        </ThemeProvider> // <-- and this
      </UserProvider>
    </BrowserRouter>
  );
}

⛳️ Import the ThemeContext into your UserPage component and use the useContext hook to access the data in the context:

import { useContext } from "react";

import { UserContext } from "./UserContext";
import { ThemeContext } from "./ThemeContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change username to spongebob
      </button>
      <h2>Theme: {theme}</h2>
      <button onClick={handleThemeToggle}>Change theme to dark</button>
    </>
  );
}

👀 You can provide state values and functions to update them inside a context. This allows you to reuse the logic and data across the application simply by using the “useContext” hook.

💭 Storing state from your API in a context can allow you to more easily refresh the data from multiple parts of your application - for example, a PostsContext that provides a “fetchPosts” function can be used in multiple components to refresh the API data. For example: AddPostForm.jsx might use the PostsContext to call “fetchPosts” again. The query string form might also call “fetchPosts” to refresh the data with a new query string. This is powerful because it means you can update the data in one place and it will be reflected in all components that use the context.



==============================================================
REDUCER WORKSHOP =============================================
==============================================================

Managing state with useReducer
Overview

The useReducer hook is an alternative to the useState hook for managing state in React. It’s useful for managing complex state that involves multiple values, or when the next state depends on the previous state.
Class Plan

    Demo: Managing state with useReducer
    Workshop: Manage state with useReducer

Learning Objectives

    useReducer
    Reducers
    Actions

Success Criteria

    I can explain how to manage state with reducer.
    I can give examples of use cases and benefits of using reducer.
    I can implement a basic reducer using the useReducer hook.
    “Add your own personal success criterion.”

Resources

    React: useReducer
    React: State Logic with Reducer

Workshop

### Setup your app

We’re making a simple counter to demonstrate how we can use the reducer pattern to manage the state values.

⛳️ Create a new React app with Vite.

⛳️ Create a new component called Counter and add some HTML to it.

export function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: 0</p>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

Managing state with useReducer

A reducer is just a function. The function accepts a state value, the current state, and an action value - the action to perform on the state.

The reducer performs the action and returns the new state value.

This becomes very easily testable and predictable way of managing complex state in a React application. A reducer will always transform the current state according to the current action and return a new value.

⛳️ Create a new reducer function called counterReducer and add some logic to it.

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

⛳️ Import the useReducer hook from React and use it to create a new state value called count and a new function called dispatch.

import { useReducer } from "react";

export function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

⛳️ Add an onClick event handler to the increment button that calls dispatch with an action object.

<button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

⛳️ Add an onClick event handler to the decrement button that calls dispatch with an action object.

<button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>


