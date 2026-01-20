# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



================================================================
WORKSHOP =======================================================
================================================================
Styling in React Apps
Overview

There are many approaches to styling React apps, and you’ll see developers online who feel very strongly about their preferred methods.

To begin with, it’s very reasonable to opt to import your CSS file with all of your styles at the top of your app component, and use styling as you have been doing in vanilla HTML.

You can also import styles for each component, keeping those rules in a separate CSS file. This can help with organising code, and keeping related code together.

Finally, you can also use CSS libraries and frameworks like Tailwind CSS to simplify the way you style your app.

All these methods work very well together, and you need to decide during your planning stage how to take advantage of them to style your app in an efficient and scalable way.
Class Plan

    Demo: Styling a React app with global styles, component specific styles, and Tailwind CSS.
    Workshop: Style a React app with global styles, component specific styles, and Tailwind CSS.

Learning Objetives

    CSS in React apps
    Styling React components
    className prop vs class
    Tailwind CSS

Success Criteria

    I can style my React app using a globals stylesheet.
    I can style my components using a bespoke stylesheet for each component.
    “Add your own personal success criterion.”

Resources

    React: Adding styles
    Tailwind CSS: Installation guide
    Tailwind CSS Playground

Workshop
className prop vs class attribute

While JSX in React is largely the same as HTML, there are some minor differences. One of the most commonly used is the requirement in React to use the className prop instead of the class attributes as you would in HTML.

This is because class is a reserved keyword in JavaScript, so shouldn’t be used as a prop name. The rule is that in JSX we use className in place of class. It works exactly the same.
Styling a React app with global CSS styles

⛳️ Create a new React app with vite

 npm create vite@7

👀 Inspect the main.jsx file that imports the index.css file. This file has some basic styles that apply to top level elements like styling all the a links and their hover effects.

👀 Inspect the App.jsx file that imports the App.css file. This file has styles specific to our App component, which includes our logo and some of the page content styles on the default vite welcome page.

💭 You can write all your styles in the App.css file, or you can create a css file for each component. It’s up to you, and how you want to organise your code. On larger projects, your main style file is likely to grow very large, so separating out styles specific to only one part of the page can be beneficial.
Create new components with their own styles

⛳️ Create a new component called Header in a components folder and create a new CSS file for it called Header.css.

// Header.jsx

import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>My App</h1>
    </header>
  );
}

/* Header.css */
.header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

👀 Be sure the Header.css file is imported at the top of the Header component.

🎯 Import the Header component into your App.jsx file and render the <Header /> on the page.

🎯 Follow the same process to create a Footer.jsx file, Footer.css file, import the css into the component, and render the <Footer /> in your App.jsx.

💭 If you find you want to apply the same classes to some items in your header and footer (like consistent text styling) you can move these to the App.css file. Those rules will be shared among all components.



Style a component with Tailwind CSS
Another way to style your app and components is with Tailwind CSS. Tailwind is a utility-first CSS framework that allows you to build complex layouts and components with minimal custom CSS. Once you get used to it you can build complex layouts without having to write a separate style sheet.

Before we can use Tailwind CSS, we need to install it in our React app. We are going to follow the installation guide for Vite.

⛳️ First, install the tailwindcss and @tailwindcss/vite dependencies. In your terminal, run the following command:

npm install tailwindcss @tailwindcss/vite

⛳️ We now have to configure the Vite plugin in our vite.config.js file. It should look like this:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // add "tailwindcss()" here
});

⛳️ Finally, we add the tailwindcss import at the top of our globals stylesheet – in this case, we are using App.css.

@import "tailwindcss";

Now that the installation is done, you can use Tailwind CSS by passing one of its classes to the className prop. The utility classes usually map to a single CSS property, like bg-red-500 for background-color: red;, or text-center for text-align: center;.

We need to rely on the Tailwind CSS documentation to find the equivalent utility classes to our usual CSS selectors.

💭 There are cheatsheets to help you with this task, but make sure they are updated to the latest version of Tailwind CSS (v4.1).

Let’s give Tailwind CSS a go!

⛳️ Create a NavBar.jsx component in your components folder. We are going to add some placeholder links for now.

export default function NavBar() {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
}

⛳️ Now we will style it using Tailwind CSS utility classes.

export default function NavBar() {
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        className="m-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        Home
      </a>
      <a
        href="#"
        className="m-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        About
      </a>
      <a
        href="#"
        className="m-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        Contact
      </a>
    </nav>
  );
}

As you can see, we are able to add as many utility classes as we need to style any element in our component. In this case, we applied a flex layout, and styled each individual link, including a hover effect!

💭 You might have also noticed that the more utility classes we use, the least readable our code is. Tailwind CSS is a great tool for on-the-spot styling or quick and efficient changes, but it should not replace your globals stylesheet and the design strategy for your app.

