This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


WORKSHOP ====================================================

Next.js: Server Rendered React
Overview

Next.js is a a framework for building React applications. It’s a popular choice for building websites and applications, and it’s used by some of the biggest companies in the world like Netflix, Uber, Deliveroo and Twitch.

React is great for building user interfaces, but it’s not a complete framework for building fully capable apps efficiently. It deliberately does not include solutions for things like page routing and data fetching, instead delegating that responsibility to the developer and the open source community. This is great for flexibility, but it can mean you need to make a lot of decisions and use a lot of different libraries to build a complete app.

Next.js emerged as an open source tool that defined some more opinionated practices for building React apps, and provided a lot of the functionality that React doesn’t include: routing, data fetching, and rendering your React powered apps to static HTML files so it can be read by search engines and social media crawlers. It adds support for many other common requirements: CSS modules, image optimisation, API routes, TypeScript, Tailwind CSS and more.

The Next.js documentation is high quality and detailed and you’ll want to refer to it often: https://nextjs.org/docs
Class Plan

    Discussion: What is Next.js
    Demo: Create a new Next.js app
    Workshop: Create a new Next.js app

Learning Objectives

    Setting up a new Next.js project

Success Criteria

    I can describe the basic concepts related to Next.js, especially the concepts of server-side rendering and file system routing.
    I can give examples of some differences between Next and React.
    I can create a Next template app.
    “Add your own personal success criterion.”

Workshop
Create a new Next.js app

⛳️ Create a new Next.js app:

npx create-next-app@latest

👀 You’ll be prompted to answer a series of questions about which features you want to use. Give a name to the project. Say No to Typescript to start with, and Yes to everything else.

⛳️ Run the app:

cd name-of-your-project
npm run dev

💭 This will start a development server on port 3000. Open http://localhost:3000 in your browser to see your app.

⛳️ Open the project in VS Code:

code .

⛳️ With the dev server running, make some edits to the index page file src/app/page.js - delete all the content and replace it with your own HTML.

👀 You should have a brand new app running with fast hot reloading updating your page whenever you save the file.

💭 This page.js is in the root of the /app directory. It is the equivalent of the index.html file in a vanilla JS project, or the / root route in React Router. This is the page that will be rendered when you visit the root of your website.

Package.json scripts
Next.js comes with a few scripts defined in the package.json file. These are:

    dev - starts a development server
    build - builds a production version of your app (You don’t need Vite - Next.js has it’s own build tool)
    start - starts a production server (once you’ve built your app, you can run it with this command)
    lint - runs the eslint linter

⛳️ Run the dev script:

npm run dev

👀 This will create a new folder called inside a folder called .next in your project. This is where the development version of your app will be running from.

⛳️ Run the build script:

npm run build

👀 This will create a build version of your project inside the .next folder (the same folder the dev script uses).

⛳️ Run the start script:

npm run start

👀 This will start a production server on port 3000. Open http://localhost:3000 in your browser to see your app.

💭 Usually you will use npm run dev to run the development server locally, and the build script will run when you deploy your app (whether to Render.com or Vercel.com). The build command creates an optimised version ready for production.



=========================================================================
WORKSHOP 2 ==============================================================
=========================================================================

Next.js File System Routing and Link
Overview

Like many other React routing libraries Next.js has a <Link /> component that handles intelligently navigating around your website.

Unlike React Router, Next.js does not use a <Route /> type component for defining routes. Instead, it uses filesystem based routing. We make new pages on the site by making new folders and page files in our app directory.

We’ll first look at making new pages, and then how to create dynamic routes just like we did with React Router.

Additionally we’ll cover the layout.js file, which is a special file at each level of the folder tree that can be used to define a consistent layout for each of the routes in that folder.
Class Plan

    Demo: File system routing, the layout.js file and <Link /> component in the app directory, static and dynamic routes.
    Workshop: Creating a navigable website in Next.js with the file system router

Learning Objectives

    File system routing (static and dynamic)
    <Link /> component

Success Criteria

    I can structure my Next app using folders and page components.
    I can implement static routes.
    I can implement dynamic routes.
    I can add some navigation using the Link component.
    “Add your own personal success criterion.”

Workshop
File system routing

Next.js’s /app directory is a special directory that defines all of the pages in your project, organised into a folder structure that matches the structure of your URL. The page.js file is a special file, and whatever component is exported as the default export in this file will be detected by Next.js and rendered at that route.

⛳️ Create a folder called about inside the /app directory. Inside that create an empty file called page.js. It’s final location is /app/about/page.js.

🎯 Export a default function component called AboutPage that returns some simple content for your about page.

👀 Open http://localhost:3000/about in your browser. You should see your content.

💭 This is the equivalent of creating a new route in React Router, but instead of defining a route in a <Route /> component, we create a new folder - with the page name - and page.js file in the /app directory.
Layouts

Next.js has a special file called layout.js that can be used to define a consistent layout for all the pages in a folder. This is useful for defining a consistent header and footer for all the pages in a folder.

By default there will be one single layout.js file at the top level of the /app directory. This will wrap all of our routes, so it makes sense it set up our page navigation and website header and footer there. We will render the {children} prop where we want to render the content of each page. This is similar to the <Outlet /> component in React Router.

🎯 Open the layout.js in the /app directory, and add a <header>, <nav>, and <footer> to the page. Be sure to keep the {children}, rendering it between the header and footer.

👀 Open http://localhost:3000 in your browser. You should see your header and footer, and the content of the page rendered between them.

Navigation and Linking

⛳️ Add links by importing the <Link /> component from the next/link package.

import Link from "next/link";

🎯 Add a link to your homepage at / and your about page at /about in the nav section of your header.

<Link href="/">Home</Link>

👀 Note that unlike React Router, the Next.js Link component uses href, instead of to, the same as a standard HTML a tag.
Defining Dynamic Routes

Next.js also supports dynamic routes, just like React Router. We can create a dynamic route by creating a folder with square brackets in the name. For example, /app/posts/[id]/page.js will create a dynamic route at /posts/:id.

⛳️ Create a new folder called posts in the /app directory. Inside that create a new folder called [id]. Inside that create a new file called page.js. It’s final location is /app/posts/[id]/page.js.

👀 Notice that you can visit this page in your browser at http://localhost:3000/posts/1 - where 1 is the id of the post. You can use any number, or string, here and the page will load. We will be able to retrieve this dynamic parameter inside our page file.
Retrieving Dynamic Parameters

Next.js automatically handles retrieving the dynamic post id parameter from the URL and makes it available as a prop on our page component. You can retrieve the parameter by using the params prop in your page component.

Since Next.js was updated to version 15, params now works asynchronously. That’s because the params prop is a promise!

⛳️ Add a console.log statement to your page component that logs the params prop, and render the {params.id} value. The properties on the params object are named after the square bracket folder name you used to define the dynamic route.

// /app/posts/[id]/page.js
export default async function PostPage({ params }) {
  const slug = await params;
  console.log(slug); // Output: { id: 1 }
  return <h1>Post Page {slug.id}</h1>; // Output: Post Page 1
}

👀 Open the page in your browser and check the console in your terminal. You should see an object with a key of id and a value of the id you used in the URL.

💭 This page renders on the server side. We’ll talk more about this later. Console logs in server components will appear in the server terminal, not the browser console.
Linking to Dynamic Routes

🎯 Add a link to your layout.js that points to the dynamic post page at /posts/1 in the nav section of your header.

<Link href="/posts/1">Post 1</Link>

👀 Open the page in your browser and click the link. You should see the dynamic post page load.
Dynamic Routes with Multiple Parameters

You can also define dynamic routes with multiple parameters. For example, /app/posts/[id]/[commentId]/page.js will create a dynamic route at /posts/:id/:commentId, that loads at http://localhost:3000/posts/1/2, where the post ID is 1 and the comment ID is 2. You can nest these indefinitely to organise your page structure accordingly.

🎯 Retrieve the commentId parameter from the params object and display it on the page.

// /app/posts/[id]/[commentId]/page.js
export default async function CommentPage({ params }) {
  const slug = await params;
  console.log(slug); // Output: { id: 1, commentId: 2 }
  return (
    <h1>
      Post Page ID: {slug.id}, Comment ID: {slug.commentId}
    </h1>
  ); // Output: Post Page ID: 1, Comment ID: 2
}

👀 By following this convention, we can create and structure complex apps with dynamic route parameters without any extra libraries, code or configuration. The parameters and pages just work, as long as the folders are organised correctly, and map 1:1 with the URL in the browser.



=========================================================================
WORKSHOP Next Image Component & Fonts ===================================
=========================================================================

Overview

Next has its own component that replaces the default <img /> tag. Lets look at what it can do!

They have also have Google fonts built in, which makes using a huge variety of fonts much easier.
Class Outline

Demo: Images component & fonts. Workshop: next/image and next/font experiments.
Learning Objectives

    Understand what these components do and why they exist.
    Implement efficient use of images, fonts and scripts on a Next.js website.
    Understand the capabilities of next/image for optimising images for different devices and screen sizes, and only loading visible images.

Success Criteria

    I can describe how images and fonts are optimised in Next.
    I can add an Image component to my app whose source is stored locally, in the public folder.
    I can add an Image component to my app whose source is stored externally, for example, in Unsplash.
    I can add a new font to my app in the layout file using Google Fonts.
    Stretch goal: I can test the Image blur placeholder using the Network tab.
    “Add your own personal success criterion.”

Resources

    Next’s own Image Component
    Next.js: Font Optimisation

Workshop

⛳️ Import next/image into your page

import Image from "next/image";

⛳️ Add an image to your public directory

⛳️ Import that image in your page

import myImage from "@/../public/images/imagename.jpg";

⛳️ Use your image as the source of your image, and add a blur attribute

<Image src={myImage} alt="the most beautiful image you have every seen" placeholder="blur" />

Play around with large and small images, what happens if you slow your network speed using the Network tab in dev tools?

⛳️ Let’s have a look at fonts now. Go to your layout.js and check how fonts are implemented.

💭 Remember that, while on VSCode, pressing the command / control button and clicking on an element, especially imported elements, will show you where the element is stored. This is especially useful to check the font index file, which contains a list of fonts and their properties.

🎯 Choose a different font from Google Fonts or the font index file, and implement it in your app.

🏹 Try to customise your chosen font as much as possible, adding subsets and other properties. The docs show how to customise your font in different ways.




========================================================================================
NEXT, CSS STYLING WORKSHOP =============================================================
========================================================================================
Styling in Next.js: Global CSS, CSS Modules, and Tailwind CSS

Overview

Next.js supports a large number of different approaches to styling your apps and components.

The globals.css is included by default and can be used to apply styles that take effect over the entire app. This works exactly like your usual styles.css file, and you can reference those style classes using className in your components.

Next.js also supports CSS Modules, which allow you to create a CSS file that is scoped to a single component. This is a great way to keep your styles organised and avoid naming collisions. You can import a CSS file specifically for a component, and use it’s styles only in there, even if they conflict or have the same names with other styles in other components.

Next.js also supports Tailwind CSS out of the box (it even asks if you’d like to use it in the create-next-app script).

We’ll show you simple versions of how to use each of these approaches, but it’s recommended you read the styling docs on the Next.js website to properly understand the different approaches.
Class Plan

    Demo: Global CSS, CSS Modules, and Tailwind CSS styling approaches
    Workshop: Styling a Next.js app with Global CSS file, a CSS module, or Tailwind CSS

Learning Objectives

    Global CSS
    CSS Modules
    Tailwind CSS

Success Criteria

    I can add styles using the globals.css stylesheet.
    I can add add styles using a CSS module in one of my pages.
    I can add styles using Tailwind CSS.
    I can add a new font to my app in the layout file using Google Fonts.
    Stretch goal: I can declare my own CSS variables in globals.css
    “Add your own personal success criterion.”

Resources

    Tailwind CSS: Adding custom styles

Workshop
Global CSS

⛳️ Create a new Next.js app with create-next-app. Say yes to Tailwind CSS, and no to TypeScript.

npx create-next-app@latest next-styling

👀 Open the project in VS Code:

cd next-styling
code .

🎯 Open the src/app/globals.css file in your editor and add some simple class css rules to start styling your page header or your navigation. elements in your layout.js file, just to make sure they’re working.

/* src/app/globals.css */
h1 {
  color: red;
}

👀 This should feel quite familiar by now. You can write all your styles in the global.css file and they’ll be able to affect every part of your app.

💭 This is the same as writing a styles.css file in a vanilla JS project, or importing a styles.css file in your index.js file in a React project.
CSS Modules

⛳️ Create
.header {
  background: plum;
}

⛳️ Import the CSS file into your layout.js file.

// src/app/layout.js
import headerStyles from "./header.module.css";

🎯 Add the headerStyles.header class to the <header> element in your layout.js file.

// src/app/layout.js
<header className={headerStyles.header}>

👀 You should see the background of your header change to plum.

💭 Importing a file containing .module.css will turn your styles into a JS Object that you can pass to the className prop of any element. This will apply the styles. Because you have to import the file manually where you want to use the styles, this means the styles are only scoped directly to that component. They will not leak out to other pages or affect other parts of the app unexpectedly.

🎯 Add a footer.module.css file and apply some styles to the footer of your page.

🎯 Create a new component called Header in a file called Header.jsx in the /components directory (you’ll need to make the components folder in the src directory). Its final location is /src/components/Header.jsx. Import your header styles there, and remove the import from the layout file. Import the header component into the layout file and render it.

💭 You now have a separate header component with its own style sheet scoped to just that component.

Tailwind CSS
----------------

We have been using Tailwind CSS already in our React apps, and we can continue doing so in Next.js in the same way too. No installation needed this time, as Tailwind CSS is installed (if you choose to do so) while setting up a new Next.js app.

Let’s have a look at other features that come with Tailwind CSS.
Adding custom values to utility classes

When we use utility classes, Tailwind CSSs has already set up predetermined values to its properties. However, we have the option to add our own values too.

⛳️ First, let’s create a new NavBar.jsx component in our components folder with some styles.

export default function NavBar() {
  return (
    <nav className="flex justify-center">
      <a href="#" className="m-2 bg-sky-400 p-4 hover:bg-amber-400">
        Home
      </a>
      <a href="#" className="m-2 bg-sky-400 p-4 hover:bg-amber-400">
        About
      </a>
    </nav>
  );
}

------------------------- BOOKMARK ---------------------------------------------------------------------------

If we want to override the predetermined values of margin and padding to our own, we can use square brackets and our new value.

export default function NavBar() {
  return (
    <nav className="flex justify-center">
      <a href="#" className="m-[5px] bg-sky-400 p-[10px] hover:bg-amber-400">
        Home
      </a>
      <a href="#" className="m-[5px] bg-sky-400 p-[10px] hover:bg-amber-400">
        About
      </a>
    </nav>
  );
}

Tailwind themes and variables

As you know, Tailwind CSS has predetermined values that we can use to style our elements. However, Tailwind also gives us the possibility to set up our own values, giving us the freedom to customise our colour palette, how wide our margins are, etc. Let’s see how we can set this up.

⛳️ In our globals.css file, add the @theme directive. Within this directive, we can then add CSS variables with our custom values.

💭 A CSS variable stores a specific value that we can then reuse to style our elements.

@theme {
  --color-peru-500: #cd853f;
}

Now that we have set up our new colour, we can then use it just like any other Tailwind selector. Let’s use it in our <nav> element:

export default function NavBar() {
  return (
    <nav className="flex justify-center bg-peru-500">
      <a href="#" className="m-[5px] bg-sky-400 p-[10px] hover:bg-amber-400">
        Home
      </a>
      <a href="#" className="m-[5px] bg-sky-400 p-[10px] hover:bg-amber-400">
        About
      </a>
    </nav>
  );
}

The Tailwind documentation includes more examples of how to make the most of themes. Check it out!


-------------------------------------------WORKSHOP----------------------------------------------
Handling Errors in Next.js
Overview

Things are going to go wrong in your app. Whether it’s your fault for writing bad code (surely not!?), or something out of your control like a network error or a server issue, you need to be able to handle errors gracefully - at the least you want to show an error message to the user when something goes wrong, and ideally you want to be able to recover from the error and retry the action that caused it.

Next.js and React provide some useful tools to help you handle errors.
Class Plan

    Demo: Error handling in Next.js
    Workshop: Error handling in Next.js

Learning Objectives

    Error handling
    Error boundaries
    Error recovery

Success Criteria

    I can explain different use cases for not-found and error pages.
    I can implement a custom not-found page.
    I can implement a custom error page.
    “Add your own personal success criterion.”

Resources

    Next.js not found page
    Next.js Error Handling Docs

Workshop
not-found.js

The most common kind of error is probably a 404 error. This occurs when a user tries to load a page that doesn’t exist. If you visit the page for an /post/1231231 post id that doesn’t exist in your database, this is a 404 Not Found error. Next.js provides a built in way to handle these errors.

In a project with a posts/[id]/page.js route, that loads a post according to the specified Id in the URL, you can create a posts/[id]/not-found.js file. This will be used to display a custom 404 page when the post is not found. A simple one looks like this, but you can customise it however you like. Twitter’s early days were plagued by the “fail whale” which would be shown when the site was down. You can attempt to reduce the pain of errors by making the error page fun.

// app/posts/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested post</p>
      <Link href="/">Return to the homepage</Link>
    </div>
  );
}

⛳️ In a component that tries to load a post from the database, use the notFound function to trigger the 404 page to show. This is a function that you can import from Next.js.

// app/posts/[id]/page.js

import { db } from "@/utils/dbConnection";

import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const slug = await params;
  const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id}`))
    .rows;

  // if there is no post, run the notFound function to show the not-found.js page.
  if (!post) {
    notFound();
  }

  // otherwise, get on with rendering the page.
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}





