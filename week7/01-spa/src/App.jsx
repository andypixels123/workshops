// import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import AboutPage from "./components/AboutPage"; // curly brackets removed
import HomePage from "./components/HomePage"; // curly brackets removed
import Missing404 from "./components/Missing404"; // curly braces removed


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Welcome to my website</h1>
//       </div>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/about" element={<h2>About</h2>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Welcome to my website</h1>
//         <Link to="/about">About</Link>
//         <Routes>
//           <Route path="/about" element={<h2>About</h2>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Welcome to my website</h1>
//         {/* <Link to="/about">About</Link> */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to my website</h1>
      <nav>
        <Link style={{color:"green"}} to="/about">About</Link> &apos;&nbsp;
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Missing404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;