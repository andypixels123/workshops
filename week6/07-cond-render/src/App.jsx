
import ListItems from './components/ListItems';
// import './App.css'

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
//       {isVisible && <p>Hello World</p>}
//     </div>
//   );
// }

// AS ABOVE EXAMPLE BUT USING TERNARY OPERATOR
// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
//       {isVisible ? <p>Hello World</p> : null}
//     </div>
//   );
// }

// prints 0 on page ref: ListItems.jsx
function App() {
  return (
    <ListItems />
  );
}

export default App
