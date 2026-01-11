# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


===============================================================
WORKSHOP
===============================================================

Lists and Keys
Overview

When displaying lists (arrays) of items in React we use the .map method to iterate over the array items and return a list of elements.

The map array method works similarly to the forEach array method, but instead of just executing a callback function for each item in the array, it returns a new array with the results of calling the callback function on each item in the array.
Class Plan

    Demo: Using the map method to render a list of items
    Workshop: Create a list of items in React

Learning Objectives

    Lists
    Keys
    .map()

Success Criteria

    I can explain the difference between the forEach and map methods.
    I can store data effectively using an array of objects.
    I can render multiple instances of an element or component using map().
    I can add a key property to my rendered element or component.
    “Add your own personal success criterion.”

Resources

    React.dev: Rendering Lists
    React.dev: Rendering lists -> How to get a key

Workshop
Rendering lists of items

⛳️ Experiment with transforming an array of numbers into an array of other numbers, by performing a calculation on each item in the array using .map.

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

⛳️ In a new React project, use the map method to iterate over an array of items and return a list of HTML elements to render.

export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const htmlItems = items.map((item) => <li>{item}</li>);

  return <ul>{htmlItems}</ul>;
}

👀 If you run this in your browser you’ll see an error in the browser console warning about the absence of the key property.
Keys

When rendering a list of elements in React, we need to provide a key prop to each element. This is a unique identifier for each element in the list.

⛳️ Add a key prop to each of your items by including it in the return value of the callback function passed to .map.

export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const htmlItems = items.map((item) => <li key={item}>{item}</li>);

  return <ul>{htmlItems}</ul>;
}

⛳️ You can also do this in-line, rather than creating a separate variable for the html elements. This is a common pattern to see in React code. In this case, we’re rendering the resulting object of HTML elements returned by the map method after applying the callback function to the original array.

export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

💭 The key prop is used by React to keep track of which elements have changed, been added or been removed from the list. It’s important that the key prop is unique for each element in the list, and that it doesn’t change between renders. Using a loop index is not appropriate here, because in a list of three items removing the middle item would cause the entire list to re-render. Ideally, removing the second item would remove that item, and replace it with the third item in it’s place.

