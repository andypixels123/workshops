# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



=============================================================================

Handling Events in React: onClick
Overview

React provides a declarative way to handle events. In a similar way to specifying our event listeners by looking up elements in the DOM, we can instead directly attach event handles to our HTML buttons when we render them.

The most common event handler is the onClick prop on buttons and fields, but all the standard HTML events are supported. onSubmit on a form is another useful one.
Class Plan

    Demo: Live coding, adding an event handler to a button HTML element to render to the console, compare to addEventHandler code. Use inline function and specify a handleClick function.
    Workshop: Add an event handler to many buttons to render to the console. Render multiple buttons with different event handlers.

Learning Objectives

    What is an event handler anyway? Just a function!
    How do we add an event handler to a button in React?
    How do we pass arguments to an event handler?

Success Criteria

    I can implement an inline onClick event.
    I can implement an onClick event with handler and listener separately.
    I can pass an event handler as a prop to an event listener located in a different component.
    “Add your own personal success criterion.”

Resources

    React: Responding to events

Workshop

Follow the guide at react.dev, and then do a simple event handler in both inline and function form, and inline with a unique argument for each button.

    React: Responding to events

Defining event handlers inline

You use event handlers like this:

<button onClick={() => console.log("Clicked button!"))}>Click me!</button>

Which is the same as this:

<button
  onClick={function () {
    console.log("Clicked button!");
  }}
>
  Click me!
</button>

It’s the same as doing this in vanilla JavaScript:

const button = document.createElement("button");
button.addEventListener("click", function () {
  console.log("Clicked button!");
});

🎯 Do some inline event handling, by setting up some HTML buttons with inline functions that log to the console when the button is clicked
Passing event handler functions

function handleClick() {
  console.log("Clicked button!");
}

<button onClick={handleClick}>Click me!</button>;

This is the same as doing this in vanilla JavaScript:

function handleClick() {
  console.log("Clicked button!");
}

const button = document.createElement("button");
button.addEventListener("click", handleClick);

🎯 Create a function called handleClick that logs to the console and pass it to the onClick attribute of a button.
Passing arguments to event handlers

You can use an inline function to pass arguments to an event handler function like this:

function handleClick(message) {
  console.log(message);
}

<button onClick={() => handleClick("Hello!")}>Click me and I say hello!</button>
<button onClick={() => handleClick("Goodbye!")}>Click me and I say goodbye!</button>

This is the same as doing this in vanilla JavaScript

function handleClick(message) {
  console.log(message);
}

const button = document.createElement("button");
button.addEventListener("click", function () {
  handleClick("Hello!");
});

💭 The concepts are very similar between React and vanilla JavaScript but the syntax is different. It’s a DOM node with an event handler.

