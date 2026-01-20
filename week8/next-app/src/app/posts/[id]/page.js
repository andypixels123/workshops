// /app/posts/[id]/page.js
// destructure params and extract id from params, pass result as prop {slug.id}
export default async function PostPage({ params }) {
    const slug = await params;
    console.log(slug); // Output: { id: 1 }
    return <h1>Post Page {slug.id}</h1>; // Output: Post Page 1
}