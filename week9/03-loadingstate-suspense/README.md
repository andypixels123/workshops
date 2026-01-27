Next.js Loading states and Suspense
Overview

Next.js has a built in loading state component that you can use to show a loading spinner while your page is loading.

You can also use React’s Suspense component to show a loading state while a component is loading.

To illustrate this we’ll make an artificially slow server component (using a setTimeout), and show the two ways of handling loading states with Next.js.

loading.jsx is a file that you can place next to a slow page.js (one that loads lots of data, for example), and it will show whatever content you return from that component.

Suspense is a React component you can wrap your slow component in, and provide a fallback component to render in it’s place while waiting for the slow component to run on the server.
Learning Objectives

    To understand the uses of implementing a loading state.
    To improve the user experience by using a loading page in a slow-rendered page.
    To improve the user experience by using Suspense to render the contents of a page separately, depending on their size.

Success Criteria

    I can give examples of different loading state use cases.
    I can implement a loading state using a loading.js page.
    I can implement a loading state using the Suspense component from React.
    Stretch goal: I can implement active links in my navigation.
    Stretch goal: I can add a loading spinner.
    “Add your own personal success criterion.”

Resources

Next.js: Loading UI File Conventions: loading.js
Workshop

⛳️ In your project, create a slow component. It can load some remote data, or you can use an artificial delay with a setTimeout function like this:

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  // slow because of a delay, or fetching lots of data over the network or from a database
  await delay(5000);

  return (
    <div>
      <p className="text-green-400">
        I&apos;m very slow to load, but here I am at last!
      </p>
    </div>
  );
}

🎯 Create two new page routes, one /slow and one /fast, and render the SlowComponent on them both.

🎯 In the /slow folder, create a loading.jsx file with the following code:

export default function Loading() {
  return (
    <div>
      <p className="text-green-400">Loading your slow page...</p>
    </div>
  );
}

🎯 In the /fast/page.js import <Suspense> from ‘react’, and wrap the SlowComponent in the Suspense component, providing a fallback prop, which can be anything from simple text, to a fully designed loading page component.

import { Suspense } from "react";
import { SlowComponent } from "../SlowComponent";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}


----------------------------- WORKSHOP ----------------------------------

Component Libraries
Overview

Component libraries will speed up your ability to build complex user interfaces that are consistent and accessible.

Component libraries are often implementations of a design system: a set of consistent and reusable building blocks that can be combined in different ways to create a user interface.

There are a huge number of different options, each with their own advantages and disadvantages.

It’s worth taking a look at the websites of the different options to get a feel for what’s available. In this class we’ll encourage Radix UI, which also gives the option of using shadcn in future (as shadcn is built on top of Radix primitives using tailwind).

High quality, widely used component libraries include, but are far from limited to:

    Material UI / MUI
    Chakra UI
    Radix UI
    shadcn/ui

Class Plan

    Demo: Component libraries, setting up Radix Primitives components
    Workshop: Experiment with using Radix UI in your app

Learning Objectives

    Component libraries
    Design systems
    Radix UI

Success Criteria

    I can read documentation actively.
    I can implement one component primitive following the documentation.
    I can implement one icon following the documentation.
    “Add your own personal success criterion.”

Resources

    Radix UI
    Radix UI Getting Started Guide

Workshop
Setup Radix Primitives

It is recommended that you use the unstyled Radix primitives and manage styling yourself (based on the examples provides in the docs), as setting up the Radix UI themes is more complicated and can lead to fighting against the opinionated styles to make them look how you want. The unstyled primitives provide all of the accessibility and functionality without any styling./

⛳️ Follow the Getting Started guide to install and set up your first Radix component.

🎯 Try out three or more of the components in the set. Some are more difficult to use than others. Good components to start with are Switch, Dialog, Popover and Tooltip. More complex but common options are Tabs, NavigationMenu and DropdownMenu

💭 Each of the components has it’s own package you can install separately. For example, installing the Popover component can be done with npm install @radix-ui/react-popover and the Switch component can be installed with npm install @radix-ui/switch and so on.

💭 You may also require @radix-ui/react-icons for the Icon pack and @radix-ui/colors for importing the stylesheets provided in the example docs.
Use React Icons

Radix UI has an icon pack, but it may not contain everything you’d like to use.

You can use the React Icons library to add more icons to your app. While it can be preferable to use a consistent icon pack, it’s not always possible to find everything you need in one place, so you can mix and match as needed.


---------------------------- BOOKMARK -----------------------------------------------

⛳️ Install the React Icons library with npm install react-icons, and then choose your icon to get the import path to use in your components.

import { FaTwitter } from "react-icons/fa";

export function MyComponent() {
  return (
    <div>
      Icon: <FaTwitter />
    </div>
  );
}