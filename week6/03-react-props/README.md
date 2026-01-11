# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



========================================================================================================
WORKSHOP ===============================================================================================
========================================================================================================

React: Props
Overview

Props are the inputs to a component. They are arguments for the component when it runs - just like passing arguments to a function, only they look like HTML attributes (you’ll get used to that).

The component (like a function) accepts the props (like arguments), and returns a block of JSX (like HTML) that is added to the DOM for us, without direct DOM manipulation.

When the props (arguments) change, React runs the component (function) for us again, and gets the new JSX (HTML) returned with the updated data represented. It then updates the DOM with that HTML for us.
Class Plan

    Demo: Live coding, building a hierarchical component tree with React
    Workshop: Build a component tree with React, passing props down the tree.

Learning Objectives

    What are props?
    How do we pass and render props?

Success Criteria

    I can set up a basic React app.
    I can create new components and store them in a components folder.
    I can pass props from a component parent to a component child.
    “Add your own personal success criterion.”

Resources

    React: Passing Props to a Component

Workshop
What are Props?

Props are the inputs to the component function - just like arguments to a function. You pass props like you use HTML attributes, and they are available inside the component function as an object. We usually call the object props but you could call it anything.

function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

<MyComponent name="world" />;

You can pass multiple attributes to the Component and read multiple values from the props object.

function MyComponent(props) {
  return (
    <div>
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}

<MyComponent firstName="John" lastName="Smith" />;

💭 You can’t change props inside a component directly, they are read-only. This is how we make sure things stay in sync. The data comes from outside the component. The component renders what it is given. If it needs to change the data, there are other ways. This is called “uni-directional data flow”, and is one of the core principles of React’s approach.
Rendering Components

You can render a component by putting it in the JSX of another component. You can render a component multiple times.

Here we have a functional component that is accepting props as an argument. Then, it is dynamically setting the props as the attributes for the src and alt of the image element. Then, we have to ensure this component is exported:

function MyImageComponent(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
}

export default MyImageComponent;

Here, we are in the MyGalleryComponent component file. Here, we are using the previously defined MyImageComponent to render a gallery of images. We need to ensure we are importing the component:

import MyImageComponent from "./MyImageComponent";

function MyGalleryComponent() {
  return (
    <div>
      <MyImageComponent
        imageUrl="https://unsplash.com/photos/8wTPqxlnKM4"
        altText="An absolutely terrifying kitten"
      />
      <MyImageComponent
        imageUrl="https://unsplash.com/photos/8wTPqxlnKM4"
        altText="An absolutely terrifying kitten"
      />
      <MyImageComponent
        imageUrl="https://unsplash.com/photos/8wTPqxlnKM4"
        altText="An absolutely terrifying kitten"
      />
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

React.dev links

Follow the guide at react.dev, it’s excellent:

    Learn React: Describing the UI

Passing your own Props




⛳️ Set up a new React project. Create a component titled ImageFrame.jsx. In this file, we can make a simple figure element that contains an image and a caption:

export default function ImageFrame() {
  return (
    <figure>
      <img src="" alt="" />
      <figcaption></figcaption>
    </figure>
  );
}

⛳️ In our App.jsx file, import and use the ImageFrame component:

import "./App.css";
import ImageFrame from "./components/ImageFrame"; // ImageFrame.jsx is in a components folder

function App() {
  return (
    <>
      <ImageFrame />
    </>
  );
}

export default App;

👀 Nothing will appear on the browser just yet. We can give the App.css some styling, and then we can see an empty box on the browser:

figure {
  border: 1px solid lightgray;
  padding: 10px;
  max-width: fit-content;
  text-align: center;
}

img {
  max-width: 25vw;
  height: auto;
  margin: 5px;
}

figcaption {
  color: grey;
  font-family: Arial;
}

⛳️ Now, we need to go back into our ImageFrame.jsx file, and accept the src, alt and caption props. We do this by ‘destructuring’ them within the parameter list of the ImageFrame function. Destructuring allows us to directly extract these values from the props object, making them available as individual variables that we can use in our image and caption elements.

export default function ImageFrame({ src, alt, caption }) {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

⛳️ Back in the App.jsx file, let’s give our components some information, just as we would give HTML elements attributes in a key-value pair:

<ImageFrame
  src="https://images.unsplash.com/photo-1589656966895-2f33e7653819"
  alt="a polar bear waves at the photographer"
  caption="This polar bear says hello!"
/>
<ImageFrame
  src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
  alt="a panda eats bamboo"
  caption="This panda is too busy to say hello."
/>

👀 In your browser, you should be able to see the ImageFrame components render with the information we’ve passed to it.