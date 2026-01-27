// app/posts/[id]/page.js

import { db } from "@/utils/utilities.js";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
    const slug = await params;
    const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id}`)).rows;
    // console.log(post);

    // if there is no post, run the notFound function to show the not-found.js page.
    if (post.length === 0) {
        notFound();
    }

    // otherwise, get on with rendering the page.
    return (
        <div>
            <h2>{post[0].title}</h2>
            <p>{post[0].content}</p>
        </div>
    );
}