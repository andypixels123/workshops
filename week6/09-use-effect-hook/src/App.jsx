import { useState, useEffect } from 'react'
import "./App.css"

// Create a component that displays a simple list of items on the page.

// const items = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
// ];

// function App() {
//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/todos"
        // "https://official-joke-api.appspot.com/random_joke"
        // "https://api.thecatapi.com/v1/images/search?limit=10"
        "https://week-6-api.vercel.app/api/images"
      );
      const data = await response.json();
      setItems(data);
      console.log(data);
    }
    fetchData();

  }, []);

  // return (
  //   <div>
  //     <h1>Items</h1>
  //     <ul>
  //       {items.map((item) => (
  //         <li key={item.id}>{item.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // url,width,height,id

//   return (
//     <div>
//       <h1>Cat Api</h1>
//       {items.map((item) => (
//         <img key={item.id} src={item.url} width={item.width} height={item.height} />
//       ))}
//       {/* <p>text</p> */}
//     </div>
//   );
// }

// id,title,url,alt

  return (
    <div>
      <h1>Frogs Api</h1>
      {items.map((item) => (
        <img key={item.id} src={item.url} alt={item.alt} title={item.title} />
      ))}
      {/* <p>text</p> */}
    </div>
  );
}
export default App;