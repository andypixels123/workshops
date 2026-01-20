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

-----------------------------------------------------------------------

Postgres in Next.js apps
Overview

Postgres is a database server that is offered by many providers as a service. We’ve used Supabase as our Postgres host for our standard React and Express apps, but we have several options for database servers, including Supabase, Vercel, Amazon RDS, Google Cloud SQL, and Heroku Postgres. Supabase is flexible with its free and paid plans, suitable for different project requirements, but can be slow due to the long distances the data has to travel.

If our Express API server is hosted in London, and our database is in Frankfurt, there’s an unavoidable latency as the server requests the data from the database. If we host our website on Vercel in San Francisco, it means our request has to cross the Atlantic to hit the server, then cross the channel to Germany to fetch the data, and then back across the Atlantic to render in the app on Vercel, before sending it back to us in the UK. This obviously makes our app feel very slow.

As we deploy Next.js apps to Vercel, another option for us would be to host our database on Vercel. A benefit would be that were not making requests that travel over vast distances between servers. If we were to use Vercel, this will minimise the latency and maximises the speed. Vercel also has a dedicated library, that handles setting up our environment variables for us so we don’t even have to configure those ourselves.

It’s important to be aware of the various options available to choose the best solution for each specific project. However, for consistency, we will continue using Supabase.
Class Plan

    Demo: Setting up a Postgres database on Supabase and connecting Next.js to it
    Workshop: Setting up a Postgres database on Supabase and connecting Next.js to it

Learning Objectives

    Setting up a Postgres database on Supabase
    Connecting Next.js to a Postgres database on Supabase

Success Criteria

    I can create a new table and insert seed data using the Supabase SQL editor.
    I can connect the database with my Next app.
    I can query the database and retrieve data entries in my Next app.
    I can render database data entries on a static page.
    I can render database data entries on a dynamic page.
    “Add your own personal success criterion.”

Workshop
Setting up a Postgres database on Supabase

⛳️ Create a new Postgres database by clicking the “New project” button.

⛳️ Choose a name for your database. I’m going with the unimaginative next-postgres. Select your nearest location. In the UK I went for ‘🇬🇧 West EU (London)’.

⛳️ Make a note of the password you choose, click “Create new project” and then click “Connect”.

⛳️ In the SQL Editor, create a new table in your database called posts with the following schema:

CREATE TABLE posts2 (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255),
  content TEXT
);

⛳️ Add some example data to your table with the following SQL:

INSERT INTO posts2 (title, content) VALUES
('First Post', 'This is the content of the first post'),
('Second Post', 'This is the content of the second post'),
('Third Post', 'This is the content of the third post');

⛳️ In a new Next.js project, install postgres using npm i pg.

⛳️ Making sure you’re in the route of your project (above src, node modules, etc), create a .env file. Add your connection string in this file. It should look something like this: NEXT_POSTGRES="postgresql://...".

⛳️ In your /app/posts/page.js file, import the pg function from "pg" and instantiate your database. We don’t need .env configuration like we needed previously.

import pg from "pg";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}

⛳️ Now we can use .map to render our data.

import pg from "pg";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  const posts = (await db.query(`SELECT * FROM posts2`)).rows;

  console.log(posts);

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

👀 Run your app with npm run dev and open it in your browser. You should see the list of posts as before, but this time they’re coming from your own database!

🎯 Make a similar change to your /app/posts/[id]/page.js file, to fetch a single post from your database. You need to set it up the same way as done previously.

import pg from "pg";

export default async function Post({ params }) {
  const slug = await params;
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`))
    .rows;

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

================  BOOKMARK ============== CONTINUE FROM HERE =============================

⛳️ It can be tedious having to set up your database by importing pg, then setting up the connection string in every file that you need your database for. A simple solution to this is to create a file that exports db. Add this to your src/utils/utilities.js file:

import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_POSTGRES,
});

From here, you can now import db without all of the extra hassle to your files:

import { db } from "@/utils/utilities.js";

That’s it! This is quite powerful, reducing the amount of code you need to write and the complexity of running a server and client together. For apps that aren’t consuming a third party API, or a shared API with mobile or desktop apps, it’s possible to build full stack apps very quickly this way.


================================================================================
WORKSHOP - NEXT FORMS AND SERVER FUNCTIONS
================================================================================

Next.js Forms and Server Functions
Overview

Alongside Server Components, we also have Server Functions. Similarly to how we can make database queries directly from our Next.js pages (bypassing the need for a separate API completely) we can also write code that runs on the server when a form is submitted, to save our form data to the database without a separate API server.

This is a powerful feature that shortcuts all of the boilerplate code that we’ve been using to send data back and forth from our front end apps, through the API server to the database and back again.

Server Functions run on the server side, but can be colocated in our page components or a library file in our Next.js app.

We’re going to make another form to submit our new post information to the database. Yes, another list of data and another form to input that data.

It might seem boring by now, but if you think about it the basis of almost every app you use is displaying lists of data from a database and providing a form to input or edit that data.

It doesn’t matter if it’s a post or comment on facebook, a tweet on twitter, a product on amazon, a recipe on allrecipes, a job on indeed, a house on zillow, a car on autotrader, a video on youtube, a song on spotify, a movie on netflix, a book on amazon, a podcast on apple, a pin on pinterest… you get the idea. It’s just GET and POST requests that update and retrieve lists of stuff in various, often similar, ways.

Server Functions create an API for us, in the background. We just write a function and tell the form to send its data there. In the function, we save to the database. Next.js handles all the API communication for us.
Class Plan

    Demo: Creating a form that submits data to the database with a Server function
    Workshop: Creating a form that submits data to the database with a Server Function

Learning Objectives

    Server Functions
    Forms and validation

Success Criteria

    I can create an HTML form with proper validation.
    I can use a server function to handle the form submission.
    I can query the database to insert the form data.
    I can revalidate the data on a particular route.
    I can redirect the user to a different page after submission, so they can see the data they just submitted.
    “Add your own personal success criterion.”

Workshop

🎯 Create a form for saving a post, with a title text input named title, and a textarea input named content. Put your form in /app/posts/new/page.js, so it appears at http://localhost:3000/posts/new. Add a link to your navigation in layout.js to make it easier to get to the page.

⛳️ Once your form is created, add a function that would be just like a handleSubmit that you’d pass to your onSubmit event on the form. Call it handleSavePost. There are two things we’re going to do differently to normal: we’re going to use the form action prop, and pass it our function: <form action={handleSavePost}>. Your page will look something like this:

// /app/posts/new/page.js
import pg from "pg";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server"; // makes this function run _on the server_, as if by magic API.
    console.log("Saving post to the database...");

    // connect to our database (make sure there is a DATABASE_URL in your .env.local)
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

    // get the form data from the formData object next provides
    const title = formData.get("title");
    const content = formData.get("content");

    // insert the data into postgres
    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
      title,
      content,
    ]);
    console.log("Post saved!");
  }

  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Save</button>
    </form>
  );
}

💭 The form action and method attributes: <form action="/api/posts" method="POST"> are the traditional way to submit forms on the web platform, where you submit form data as a POST request and the page refreshes.

⛳️ After our new post has been added to the database, we want to do two things: Reload the posts data on the /posts page, so it fetches the new post (instead of caching it), and redirect the user to the post list so they can see the new post was created. We can do this with two functions provided by Next.js: revalidatePath and redirect.

💭 Next.js does a lot of caching: it keeps around your data by default. It means once you’ve visited a page and downloaded the data it avoids making the request again for a period of time. You can read more about caching in the Next.js docs. The revalidatePath function tells Next.js that the data has changed, so next time it should fetch it or query the database again.

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

🎯 Now, after our INSERT query, we can add these two lines. Add them to your handleSavePost function, after the INSERT query:

await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
  title,
  content,
]);
console.log("Post saved!");

// revalidate the posts page, so it fetches the new data
revalidatePath("/posts");

// redirect the user to the posts page
redirect("/posts");

👀 That’s it. Your data from the form will be passed to the handleSavePost function, saved to the database, the posts will reload and the user will be sent back to the posts page.


