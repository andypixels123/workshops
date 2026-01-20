import { Link } from "react-router";

function Missing404() {
  return (
    <div>
      <h2>Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Missing404;