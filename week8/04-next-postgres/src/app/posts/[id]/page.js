// import pg from "pg";
import { db } from "@/utils/utilities.js";

// test with
// http://localhost:3000/posts/3
// http://localhost:3000/posts/5

async function Post({ params }) {
    const slug = await params;
    // const db = new pg.Pool({
    //     connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
    // });
    // ! now imported, see top of page

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

export default Post