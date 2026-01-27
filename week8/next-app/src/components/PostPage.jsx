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