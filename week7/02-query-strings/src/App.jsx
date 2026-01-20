import { BrowserRouter, Routes, Route } from "react-router";
import UserPage from "./components/UserPage";
import UserPostsPage from "./components/UserPostsPage";
import UserLikesPage from "./components/UserLikesPage";
import SortOrderForm from "./components/SortOrderForm";

// using dynamic username param (:), this can be any user's name
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/users/:username" element={<UserPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// nested Routes example
// using dynamic username param (:), this can be any user's name
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>
      </Routes>
      <SortOrderForm />
    </BrowserRouter>
  );
}

export default App;