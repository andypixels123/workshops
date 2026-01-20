# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


/////////////////////////////////////////////////////////////////
WORKSHOP ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


SPAs, Page Routes and React Router
Overview

“Single Page Applications” (SPAs) are web applications that run from a single index.html file. The file loads a JavaScript application that has many pages, routes and functions, but that all springs out of the same HTML file.

Instead of creating separate files for index.html, about.html, contact.html, etc. pages, the application manages the pages and navigation between them, supporting URLs like / /about, /contact, etc.

Compared to static files, SPAs are often more fully interactive, and controlling them can be slower to load, (due to needing to load and run all of the JS before showing any content on the page) and can be harder to index by search engines and social network crawlers that often don’t run JavaScript. This means they just see a blank page, often without the correct page title or metadata.
Class Plan

    Demo: Setting up React Router, an App and some Page Routes
    Workshop: Create a multi-page React application with React Router

Learning Objectives

    What is a Single Page Application?
    What is React Router?
    How do we set up React Router?
    How do we create routes?
    How do we link between routes?

Success Criteria

    I can give a definition of a Single Page Application.
    I can give examples of the benefits of using React router in my app.
    I can set up a router provider using the BrowserRouter component.
    I can implement routes with links in my app.
    I can implement a route to a NotFound component to handle user navigation errors.
    “Add your own personal success criterion.”

Required Knowledge

    JavaScript
    React
    JSX
    HTML
    CSS

Resources

    React Router
    React Router: Installation
    React Router: Routing

Workshop
What is a Single Page Application?

Single Page Applications are so called because they are run from a single index.html file. The file loads a JavaScript React application that has many pages, routes and functions, but that all springs out of the same HTML file. This is different to how a traditional website would be made with index.html, about.html, contact.html, etc. pages. They’re extremely dynamic and interactive compared to static files.
What is React Router?

React Router is a library that allows us to create “Single Page Applications” (SPAs) by defining multiple pages all handled by React. This allows the React model to apply to every part of the page from header to footer. React Router taps into the browser History API, which controls the address bar and the back and forward buttons.
How do we set up React Router?

⛳️ In a new React app, install React Router

npm install react-router

⛳️ Import the BrowserRouter component from React Router and wrap your App component in it:

import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to my website</h1>
      </div>
    </BrowserRouter>
  );
}

How do we create routes?

⛳️ Import the Route component from React Router and add a Route component to your App component:

import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

How do we link between routes?

⛳️ Import the Link component from React Router and add a Link component to your App component:

import { BrowserRouter, Routes, Route, Link } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to my website</h1>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

How to use a AboutPage.jsx component?

⛳️ Create a new file called AboutPage.jsx and add a component to it:

export default function AboutPage() {
  return <h2>About</h2>;
}

⛳️ Import the AboutPage component into your App component and use it in the Route component:

import { BrowserRouter, Routes, Route, Link } from "react-router";
import { AboutPage } from "./AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to my website</h1>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

How to use a HomePage.jsx component?

⛳️ Create a new file called HomePage.jsx and add a component to it:

import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

⛳️ Import the HomePage component into your App component and use it in the Route component:

import { BrowserRouter, Routes, Route, Link } from "react-router";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

Handle simple Page Not Found

⛳️ Create a new file called NotFoundPage.jsx and add a component to it:

import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

⛳️ Import the NotFoundPage component into your App component and use it in the Route component with a “catch all” asterisk route:

import { BrowserRouter, Routes, Route, Link } from "react-router";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}


