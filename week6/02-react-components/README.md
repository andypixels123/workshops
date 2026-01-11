# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



WORKSHOP =========================================

React: Components
Overview

Components are the building blocks of a React application. They are reusable pieces of code that can be composed together to build a greater whole.

The component (like a function) accepts the props (like arguments), and returns a block of JSX (like HTML) that is added to the DOM for us, without direct DOM manipulation.

When the props (arguments) change, React runs the component (function) for us again, gets the new JSX (HTML) returned with the updated data represented. It then updates the DOM with that HTML for us.

There are plenty of benefits to using components over vanilla JavaScript’s DOM. React uses a unidirectional data flow meaning data passes in one direction, from parent to child. This gives us web developers an easier time as the data flow is more predictable and maintainable. Components also manage their own state, meaning that components manage their data independently. This means that changes to the state of one component don’t directly affect other components. This makes components easier to understand, test and reuse.
Class Plan

    Demo: Live coding, building a hierarchical component tree with React
    Workshop: Build a component tree with React.

Learning Objectives

    What is a component?
    How do we render components?

Success Criteria

    I can set up a basic React app.
    I can create new components and store them in a components folder.
    I can nest components appropriately.
    “Add your own personal success criterion.”

Resources

    React: Your First Component
    React: Passing Props to a Component
    Learn React: Describing the UI




===========================================================
WORKSHOP ==================================================
What is a Component? ======================================
===========================================================

A component is a reusable piece of a user interface. It’s a way of encapsulating together the HTML, CSS and JavaScript that make up a single piece of functionality. Components can be composed together to create larger components, and then an entire application.

A component can be as small as a single <button>, or as large as an entire page.

A component name always begins with a capital letter. It works the same way a function does, with logic and arguments (props), but also returns a block of HTML:

function MyComponent() {
  return <div>Hello, world!</div>;
}

This is JSX, a syntax extension to JavaScript that allows us to write HTML-like code in our JavaScript files. It’s not HTML, but it looks and quacks a lot like it. It’s a way of writing HTML in JavaScript.

You give a component your data - it renders HTML for you. You give a component your functions - it can handle events for you. You give a component another component - it can render it for you as a child.

React’s virtual DOM allows only components affected by updates to re-render on the page, leading to a more efficient and performant site.

Rendering Components
You can render a component by putting it in the JSX of another component. You can render a component multiple times.

Below, we have a functional component that sets the src and alt attributes for an image element statically:

function MyImageComponent() {
  return (
    <div>
      <img
        src="https://unsplash.com/photos/8wTPqxlnKM4"
        alt="An absolutely terrifying kitten"
      />
    </div>
  );
}

export default MyImageComponent;

In the MyGalleryComponent component file, we use the previously defined MyImageComponent to render a gallery of images. We need to ensure we import the component:

import MyImageComponent from "./MyImageComponent";

function MyGalleryComponent() {
  return (
    <div>
      <MyImageComponent />
      <MyImageComponent />
      <MyImageComponent />
    </div>
  );
}

export default MyGalleryComponent;

We can then instantiate (use) the MyGalleryComponent elsewhere.

import MyGalleryComponent from "./MyGalleryComponent";

function MyPageComponent() {
  return (
    <div>
      <h1>My Gallery Page</h1>
      <p>More horrifying fluffballs, probably.</p>
      <MyGalleryComponent />
    </div>
  );
}

export default MyPageComponent;


React.dev links
Follow the guide at react.dev, it’s excellent:

    Learn React: Describing the UI

    

Making your own Components
Begin by setting up a new React project the same way we did in our last lesson, ‘React.js: Setting up a React project with Vite’.

As React projects can become quite large and spread out, it’s a good idea to use folders to organise your files. Let’s make a new folder called ‘components’ inside the src folder and create a new file titled Button.jsx. Inside here, create a div and a button as you would in HTML.

💭 In the previous example, we used export default MyImageComponent; at the bottom of the page to export the component. We can also use export default before function as follows, and it works the same way:

import React from "react";

export default function Button() {
  return (
    <div>
      <button>Click me!</button>
    </div>
  );
}

We can now go to our App.jsx file and import the Button.jsx file. Then, we can use the Button component within the App:

import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <h1>Hello, world!</h1>
        <Button />
      </div>
    </>
  );
}

export default App;

👀 Notice that the Button import line is greyed out until we use the component.

⛳️ The index.css file is applied to the main.jsx file. If you haven’t already deleted everything inside both the App.css and index.css, then do this now. You can apply styles to components as you would in regular HTML/CSS, by using the App.css file we have imported to apply styles using element, ID and class selectors.