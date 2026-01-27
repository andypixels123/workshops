// import pg from "pg";
import { db } from "@/utils/utilities";

async function PostsPage() {
    // const db = new pg.Pool({
    //     connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
    // });
    // ! now imported, see top of page

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

export default PostsPage