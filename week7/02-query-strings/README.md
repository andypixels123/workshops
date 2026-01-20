# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


////////////////////////////////////////////////////////////
//////////////// WORKSHOP //////////////////////////////////
////////////////////////////////////////////////////////////

Query Strings, URL Params, Nested Routes
Overview

Dynamic routing in React allows us to create routes that accept parameters in the URL.

This is especially useful for creating user profiles that look up a particular user: website.com/user/myusername, a blog post retrieved by it’s ID: website.com/post/123 or by it’s title ‘slug’ website.com/post/my-first-post.

This allows us to use the same component, code and display, but change the data loaded based on the URL in the browser address bar.

Query strings are a way to append additional information to a URL, usually to filter or sort the data displayed on the page. For example, to show all the posts sorted by reverse data order, a full URL might look like this: website.com/posts?sort=asc - where “asc” means “ascending” or oldest first.

Dynamic routes and query strings also work in Express, and you can use the same principles to create dynamic routes in your Express API. This way, visiting website.com/user/myusername will load the user profile page, which might make an API request to your API to load the user data as JSON from website.com/api/user/myusername.

Class Plan

    Demo: Setting up React Router, an App and some Page Routes, and a dynamic route
    Workshop: Create a multi-page React application with React Router and dynamic routes

Learning Objectives

    What are dynamic routes?
    How to create dynamic routes with React router
    What is a query string?
    How to use dynamic route values and query string values in React router

Success Criteria

    I can explain the difference between a static route, a dynamic route, and a nested route.
    I can implement a dynamic route using the useParams hook.
    I can implement a nested route using the useParams hook and the Outlet component.
    I can give a definition of what a query string is.
    I can implement a sorting system using query strings.
    “Add your own personal success criterion.”

Required Knowledge

    JavaScript
    React
    JSX
    HTML
    CSS
    React Router page creation

Resources

    React Router
    React Router: Installation

Workshop
What are dynamic routes?

Dynamic routes in React Router use a special syntax to denote a variable part of the URL. For example, /users/:username is a dynamic route where username can vary.
How to create dynamic routes with React router

⛳️ Create a dynamic route in your App component:

import { BrowserRouter, Routes, Route } from "react-router";
import { UserPage } from "./UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

⛳️ Create a new component called UserPage and import it into App. Use the useParams hook from react-router to get the username value from the URL:

import { useParams } from "react-router";

export default function UserPage() {
  let { username } = useParams();
  return <h2>User ID: {username}</h2>;
}

👀 When you visit the /users/spongebob route, you should see the value from the URL displayed on the page.

----------------------------------------------------------------------------------------------------------

Nesting URL paths

You might want to have a user profile page at /users/:username and a list of the user’s posts at /users/:username/posts.

⛳️ Nest routes by adding a Route component inside another Route component:

import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

⛳️ Then add the Outlet component to the UserPage component. This will render the child route inside the parent route at the location of the Outlet. You can think of it like a placeholder for the child route:

import { Outlet } from "react-router";

export default function UserPage() {
  let { username } = useParams();
  return (
    <>
      <h2>User: {username}</h2>
      <Link to={`/users/${username}`}>User's profile</Link> <Link
        to={`/users/${username}/posts`}
      >
        User's posts
      </Link>
      <Link to={`/users/${username}/likes`}>User's likes</Link>
      <Outlet />
    </>
  );
}

👀 You should now see a nested route, with a users page that has it’s own sub pages for the user’s profile. All dynamically displaying the username as defined in the URL.

💭 You can imagine that we could use this username value from the URL to look up our user in the database and show their real information.

----------------------------------------------------------------------------------------------

What is a query string?

A query string is a way to add additional information to a URL. It’s usually used to filter or sort data on the page. For example, to show all the posts sorted by reverse data order, a full URL might look like this: website.com/posts?sort=asc - where “asc” means “ascending” or oldest first.

You can use the dynamic query string values with the useSearchParams hook. It returns two values, the first is the search params object, and the second is a function to update the search params (useful when you want the user to be able to change the value of the query string and update the page!)

⛳️ Get the value of the sort query string parameter in the UserPage component, and display it on the page:

import { Link, Outlet, useParams, useSearchParams } from "react-router";

export default function UserPage() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  return (
    <div>
      <hr />
      sort: {sort}
      <h2>Profile for {username}</h2>
      <Outlet />
    </div>
  );
}

👀 If you visit the localhost:5173/users/myusername?sort=asc with the useSearchParams hook used you should see the value assigned in the URL displayed on the page.

💭 Combining dynamic routes and query strings is a powerful way to create dynamic pages that can be filtered and sorted by the user. Most applications work this way, and using the URL for this information allows you to share links to the app that can recreate the view you see exactly as you see it - without having to navigate through the app and configure the options to get there.
Updating query string values with forms on the page




⛳️ Use the useSearchParams hook to get the value of the sort query string parameter and display it on the page in a form with a selector for choosing the value.

⛳️ Use the second value from useSearchParams to update the value of the query string when the form is changed.

// components/SortOrderForm.jsx
import React from "react";
import { useSearchParams } from "react-router";

export default function SortOrderForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchParams({ sort: event.target.value });
  };

  return (
    <form>
      <label>
        Sort by:
        <select value={searchParams.get("sort") || ""} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </form>
  );
}

👀 Notice that the Form can exist independently of the rest of the page, and read and update the query string values. Other parts of the page can also read this value and react to it changing.

