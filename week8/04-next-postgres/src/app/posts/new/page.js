// /app/posts/new/page.js
// import pg from "pg";
import { db } from "@/utils/utilities.js";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function NewPostPage() {
    async function handleSavePost(formData) {
        "use server"; // makes this function run _on the server_, as if by magic API.
        console.log("Saving post to the database...");

        // connect to our database (make sure there is a DATABASE_URL in your .env.local)
        // const db = new pg.Pool({ connectionString: process.env.NEXT_PUBLIC_DATABASE_URL });
        // ! now imported, see top of page

        // get the form data from the formData object next provides
        const title = formData.get("title");
        const content = formData.get("content");

        // insert the data into postgres
        db.query(`INSERT INTO posts2 (title, content) VALUES ($1, $2)`, [
            title,
            content,
        ]);
        console.log("Post saved!");

        // revalidate the posts page, so it fetches the new data
        revalidatePath("/posts");

        // redirect the user to the posts page
        redirect("/posts");
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

export default NewPostPage