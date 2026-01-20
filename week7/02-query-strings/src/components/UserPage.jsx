// ! import required hooks 
// import { Link, Outlet, useParams, useSearchParams } from "react-router";
import { Outlet, useParams, useSearchParams } from "react-router";

// function UserPage() {
//     let { username } = useParams();
//     return <h2>User ID: {username}</h2>;
// }

// function UserPage() { // get username from url params
//     let { username } = useParams();
//     return (
//         <>
//             <h2>User Profile Name: {username}</h2>
//             <Link to={`/users/${username}`}>User's profile</Link> | <Link
//                 to={`/users/${username}/posts`}
//             >
//                 User's posts
//             </Link> | <Link
//                 to={`/users/${username}/likes`}>User's likes</Link>
//             <Outlet />
//         </>
//     );
// }

// Outlet is required for nested Routes
// url to use - http://localhost:5173/users/Andrew?sort=asc
// user's name is dynamic, can be any name
function UserPage() {
    // get username from url params with useParams() hook, hooks begin with 'use'
    let { username } = useParams(); // {} curly braces used to de-structure variable, useParams() returns an object so destructure is required
    // The React Router useParams hook returns an object whose keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL.
    const [searchParams] = useSearchParams();// [] square brackets used to destructure query string array returned from 'useSearchParams()' hook. 'search params' are a.k.a. 'query string'
    // get value of sort (key) from url query string, value is asc or desc or anything!
    // query string ?sort=asc or ?sort=desc or ?sort=anything!
    const sort = searchParams.get("sort");

    if (sort === "other") { username = "other name"; }
    // url to use - http://localhost:5173/users/Andrew?sort=other

    return (
        <div>
            <hr />
            <h2>Profile for {username}</h2>
            <p>value of sort: {sort}</p>
            <Outlet />
        </div>
    );
}

export default UserPage;