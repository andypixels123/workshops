# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



////////////////////////////////////////////////////////////////
WORKSHOP ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Conditional Rendering
Overview

Conditional rendering in React allows us to choose whether to show or hide parts of the rendered UI based on a condition, usually due to a state update or a prop change from a parent. There are a couple of ways to do conditional rendering, and you’ll commonly see both used in React apps. There are a couple of pitfalls to watch out for with one of these approaches!

Class Plan

    Demo: Conditional rendering in React: ternary operators and the && operator
    Workshop: Build a React app that uses conditional rendering based state or props

Learning Objectives

    JSX, Components and Props
    Hooks and State
    Handling Events
    Conditional Rendering

Success Criteria

    I can give examples of when to use conditional rendering to improve the user experience.
    I can set up an event which tracks the value of state.
    I can render a list of items using the map method.
    I can conditionally render an element on the page using an event, state, and a conditional operator, for example, a ternary operator.
    “Add your own personal success criterion.”

Required Knowledge

    HTML, CSS, JavaScript
    React: JSX, Components, Props, useState
    React: Handling Events

Resources

    React: Conditional Rendering

Workshop

Conditional rendering in React allows us to choose whether to show or hide parts of the rendered UI based on a condition, usually due to a state update or a prop change from a parent. There are a couple of ways to do conditional rendering, and you’ll commonly see both used in React apps. There are a couple of pitfalls to watch out for with one of these approaches!

🎯 Start another React app with vite. It’s convenient to use the Vite starter template for React.

🎯 We are going to use a button to toggle the visibility of a message. To achieve this, we will use three tools: state, an event, and a conditional operator.

⛳️ Render a button on the page to toggle the visibility of a message. First, we will use the AND operator (&&) to conditionally render the message.

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
// toggles TRUE / FALSE value for isVisible
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Hello World</p>}
    </div>
  );
}

⛳️ Another operator we can use to conditionally render the message is a ternary operator.

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible ? <p>Hello World</p> : null}
    </div>
  );
}

💭 Both of these approaches are acceptable in most cases.

⛔️ One common mistake is to use the && operator to conditionally render a component by comparing a falsy value, like an array length property. The following example will illustrate the problem:

🎯 Create a new component called ListItems.jsx and import it to your App.jsx component.
⛳️ Let’s look at what happens when we conditionally render using the && operator with an array’s .length. Try putting the following code in your return statement for ListItems :

export default function ListItems() {
  const items = [];

  return (
    <ul>
      {items.length && items.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

👀 If the items array is empty, items.length is 0. Since 0 is falsy, the && short-circuits and returns 0. React renders that 0 directly onto the page. That’s not what we want!

💭 This happens because the && operator returns:

    the first falsy value, if the first one is falsy,
    or the second value, if the first one is truthy.

In this case, items.length is 0 (falsy), so that’s what gets rendered.

👀 The solution is to use the ternary operator instead.

export default function ListItems() {
  const items = [];

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.length > 0 ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
}

👀 Notice the 0 is gone, and we’re rendering a message instead.

💭 If we want to render absolutely nothing when the condition is not met, we can simply return null in the else clause of the ternary.

TLDR; Avoid using && with expressions that may be 0 or ''; React will render these values directly.

<div>{0 && <p>Hello</p>}</div>        // renders: <div>0</div>
<div>{false && <p>Hello</p>}</div>    // renders: <div></div>
<div>{'' && <p>Hello</p>}</div>       // renders: <div></div>

What about arrays?

[] is truthy, even when empty.

So [] && <p>foo</p> - always renders <p>foo</p>.

{someArray && someArray.map(item => <li>{item}</li>)}

If someArray is an empty array [], the condition passes, and .map(…) still runs. Since there’s nothing to map, it renders nothing. That’s fine functionally, but it defeats the point of the condition; it just renders nothing by accident. Better to explicitly check the length of the array as greater than 0.

