// /app/posts/[id]/[commentId]/page.js
// test with - http://localhost:3000/posts/3/2

export default async function CommentPage({ params }) {
  const slug = await params;
  console.log(slug); // Output: { id: 1, commentId: 2 }
  return (
    <>
      <h1>
        Post Page ID: {slug.id}, Comment ID: {slug.commentId}
      </h1>
    </>
  ); // Output: Post Page ID: 1, Comment ID: 2
}