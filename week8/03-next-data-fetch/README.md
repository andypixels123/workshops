This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

---

Next.js Data Fetching
Overview

A new React feature called “Server Components” gives us new options for handling our data in our apps. By default, all components are “server components”. They run on the server. You can think of them like an Express API GET route that returns the HTML of a React component. This also means we don’t need to use useEffect anymore. We can make API calls directly inside our server components.

This is a new way of thinking about React apps. Instead of thinking of React as a client side framework that connects to an Express API we can now think of it as a server side framework, that can call databases and APIs from inside page components. This is a big shift and might take some getting used to. To demonstrate how this works we’ll use our trusty JSON placeholder API to load and render some example posts by ID into our dynamic post pages.

All of our apps with Vanilla JS and React until we started using Next.js have been client only apps. They needed a separate Express API to be full stack.

Now we’re using Next.js we’re writing full stack apps. We can write code that runs on the server and code that runs on the client in the same project, and Next.js helps us manage the interaction between the two sides.
Class Plan

    Demo: Fetching data from an API in Server Components
    Workshop: Fetching data from an API in Server Components

Learning Objectives

    Server Components
    Data fetching in Server Components

Success Criteria

    I can describe the steps to fetch data from an API.
    I can render a list of items on a static page using the map() method.
    I can fetch data in dynamic routes using params.
    I can render data dynamically on a dynamic page.
    I can implement a sorting feature in a page.
    “Add your own personal success criterion.”

Workshop
Fetching data from an API in Server Components

⛳️ Create a new folder called posts in the /app directory. Inside that create a new file called page.js. It’s final location is /app/posts/page.js. This is distinct from the /post folder, which only contains a dynamic route to display a single post. This page will display a list of all posts, so we use the plural.

⛳️ Now create your first “asynchronous server component”. It’s just like the other pages we’ve created, but it can use await inside the function body. We’ll use await to fetch data from an API.

// /app/posts/page.js
export default async function PostsPage() {
const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
const posts = await response.json(); // parse the response as JSON

return (
<div>
<h1>Posts</h1>
<ul>
{posts.map((post) => (
<li key={post.id}>{post.title}</li>
))}
</ul>
</div>
);
}

👀 Load this page in your browser at http://localhost:3000/posts. You should see a big list of posts from the API displayed, and lining to a dynamic route for a single post. You can click through to see the ID of the post displayed.

💭 This is the biggest shift in thinking when we start to use Next.js. The page is “server rendered” with the API request performed before returning the page. No need for useEffect to call the API, and no need to remember the data with useState. Hopefully you can see that this is a much simpler approach for creating pages that rely on external data. You can also call your database (await db.query) directly from the page component, instead of having to create a separate API.
Fetching data for dynamic routes

Now we’ve loaded our list of posts, and created a link to each one at it’s own dynamic route, we can create the page that will load the data for the individual post.

⛳️ Inside /app/posts/[id]/page.js that shows the ID param, modify the component to make an API call to fetch the data for a single post by the ID in the URL.

// /app/posts/[id]/page.js
export default async function PostPage({ params }) {
const slug = await params;
const response = await fetch(
`https://jsonplaceholder.typicode.com/posts/${slug.id}` // include the params.id value from the URL
);
const post = await response.json(); // parse the response as JSON

return (
<div>
<h1>Post {post.id}</h1>
<h2>{post.title}</h2>
<p>{post.body}</p>
</div>
);
}

👀 Load this page in your browser at http://localhost:3000/posts/1. You should see the post with ID 1 displayed.
Using query string parameters in our pages

Next.js also supports query string parameters. If we wanted to sort our list of posts according to a query string parameter, we could do so by adding a ?sort=asc to the end of the URL. This would be available in our page component as a query prop. Then we can just link to those props to reorder the list.

⛳️ Add a query string parameter to your /app/posts/page.js file. You can use the sort parameter, and set it to asc or desc. Reverse the posts array if the sort parameter is equal to descending.

// /app/posts/page.js
export default async function PostListPage({ searchParams }) {
const query = await searchParams;
console.log("searchParams", query);
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

// reverse the posts array if the sort parameter is set to descending
if (query.sort === "desc") {
posts.reverse();
}

return (
<div>
<h2>Post List</h2>
<Link href="/posts?sort=asc">Sort ascending</Link>&nbsp;-&nbsp;
<Link href="/posts?sort=desc">Sort descending</Link>
<ul>
{posts.map((post) => (
<li key={post.id}>
<a href={`/post/${post.id}`}>{post.title}</a>
</li>
))}
</ul>
</div>
);
}

👀 Now visit this page in your browser, and you can sort your posts ascending or descending by clicking the links.

💭 Hopefully this feels quite powerful and easier than what you have to do in React Router, but it might take some getting used to.
