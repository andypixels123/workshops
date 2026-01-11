# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




================================================================
WORKSHOP *******************************************************
================================================================

useEffect & fetch in React
Overview

One of the most common side-effects in React apps is making network requests for data. We’ll use the useEffect hook to make a network request to fetch data from an API, save it in React state, and render it in the UI.
Class Plan

    Demo: Loading data from an API with the useEffect hook
    Workshop: Building a React.js app that loads data from a third party API

Learning Objectives

    JSX, Components and Props
    Hooks and State
    Handling Events
    Conditional Rendering
    Lists and Keys

Success Criteria

    I can explain in my own words the component lifecycle in React and its stages.
    I can give a definition of what an effect is.
    I can explain why an API call qualifies as an effect.
    I can manage an asynchronous effect using the useEffect hook.
    “Add your own personal success criterion.”

Required Knowledge

    HTML, CSS, JavaScript
    React: JSX, Components, Props, useState
    React: Handling Events
    React: Conditional Rendering

Resources

    React: useEffect Hook
    React: useState Hook
    React: Rules of Hooks

Workshop

The useEffect hook is used to run side-effects in React. A side-effect is anything that needs to happen in your app that isn’t directly related to rendering the UI.

Because of the way React works, we can’t just run await code in our components. We need to use the useEffect hook and the fetch API.

🎯 Start a fresh React app

⛳️Create a component that displays a simple list of items on the page.

const items = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

export default function App() {
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

⛳️ Instead of hard coding those todo list items, we’ll load them from the jsonplacerholder API. useEffect fetches the data during the first run. When the items are received, they are saved in the items state using the setItems function from the useState hook.

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

👀 Notice that we’re defining an async function inside the useEffect. This is because the useEffect hook function can’t be async.

🎯 Load data from a second third party API and present it in a meaningful way. Examples might be: show github stars from the Github API.
