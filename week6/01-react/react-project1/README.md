# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




WORKSHOP ================================================

React.js: Setting up a React project with Vite
Overview

React.js is designed to solve a number of problems that arise when building complex web applications. It was built and released under an open source license by Facebook in 2013, to solve real problems they were facing in their own codebase while building out the world’s largest social network (at time of writing!).

React introduces some new approaches and concepts, and builds upon the existing underlying web technologies to create reusable pieces of an application that can be composed together into a greater whole. These are called components. Components are the building blocks of an application, encapsulating together the HTML, CSS and JavaScript that make up a single piece of functionality.

The React documentation at react.dev is superb, so it’s recommended you read through it in your own time. We’ll often defer our explanations to those docs with links where possible.
Class Plan

    Discussion: What is React? Where did it come from?
    Documentary (1h20m): How A Small Team of Developers Created React at Facebook - React.js: The Documentary
    Reading: React: Getting Started
    Reading: Vite: Why Vite?
    Workshop: Setting up a new React project using Vite

Learning Objectives

    What is React?
    What problems does React solve?
    What is a component?
    What is JSX?
    What is the Virtual DOM?

Success Criteria

    I can describe basic concepts related to React, such as components and jsx.
    I can create a React template app using Vite.
    I can write jsx in the App component.
    “Add your own personal success criterion.”

Required Knowledge

    HTML
    CSS
    JavaScript
    Node.js
    npm

Resources

    React
    React: Creating and nesting components
    React: JSX
    React: Displaying data
    React: Conditional Rendering

Workshop
Why does React Exist?

React was created to address problems that arise when building complex web applications that are interactive and constantly changing. It was created by a small team at Facebook to solve problems they had building the social network. There’s a good documentary, The Story of React, that is worth a watch.

There’s a story about the Facebook notification badge that illustrates the problem React was created to solve:

Facebook had a problem with the red notification badge for new messages. It was there to show when you had unread messages in your inbox.

The badge was in the header of the page, the inbox was in the sidebar, and messages could be shown in popups in the bottom right as you browsed the site. With multiple new messages arriving and multiple messages being marked as read from different locations and saving over slow internet connections, plus the header being reloaded when you navigate pages, it was easy for events that updated the notification count to end up happening in a confusing order.

The badge would get out of sync with the actual number of unread messages, and give false information to the user. Fixing one bug would often create another.

Users would frequently see the unread notification badge, click on it, and find no unread messages. This was a bad user experience, and Facebook wanted to fix it.

How React Solves the Problem

React flips the problem upside down. It doesn’t get the current unread count from the HTML, increment or decrement it, then put it back, from three different places at once and hope it all works out. Instead it makes the number of unread notifications in the database the single source of truth, and treats the HTML as a function of that data. When that data changes, the HTML changes too, automatically. Or you might say REACTively.

All the different parts of the page that need to know about or change the number of unread message notifications are reading from and updating the same source of truth: the data about how many messages there currently are unread. When we get a new response from the API about that value, the UI changes too, everywhere all at once.
Creating a React app

We’re going to use a modern build tool called Vite to manage our development process. Vite bundles our code up for the browser. It’s a modern alternative to Webpack, which is also still very popular. We start by using the same command as we have used previously, but we select different options.

🎯 Create a new project using the vite package.

( npm create vite@latest )
or
npm create vite@7

🎯 Choose a project name, then select ‘React’ and ‘JavaScript’ -> 'No' -> 'No'. cd to project directory and 'npm install'. Open directory in VsCode -> code .

💭 You’ll notice the file structure now looks very different to before. Open up the src folder.

⛳️ This is the structure of the main.jsx file.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

⛳️ Inside the App.jsx, there is plenty of information we don’t need. This is all you need inside your App.jsx:

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello, world!</h1>
      </div>
    </>
  );
}

export default App;

💭 Notice how we import the CSS file at the top of the page. App.css can also be cleared of all of the pre-filled in content, but take a moment to look through it and notice if anything is different.

Ctrl + c to stop dev running in browser
⛳️ Run 'npm run dev' again.

👀 Load the URL it tells you (probably http://localhost:5173) in your browser and you should see your first React app!

👀 Notice how when you edit the contents of the App.jsx file and save it, the browser immediately updates? That’s “live reload” in action!

🎯 In the package.json, look at this:

"scripts": {
  "dev": "vite"
},

This script helps us have a common command to run whether we’re using vite or not.