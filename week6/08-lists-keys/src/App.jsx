// USING ARRAY map() TO SHOW DATA ON PAGE
// can be used to process or create new array
const numbers = [1, 2, 3, 4, 5];
const tripledNumbers = numbers.map((number) => number * 3);
console.log(tripledNumbers); // produces error but not visible in devTools, no unique keys

// function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];
//   const htmlItems = items.map((item) => <li>{item}</li>);

//   return <ul>{htmlItems}</ul>;
// }

// error fixed

// function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];
//   const htmlItems = items.map((item) => <li key={item}>{item}</li>);

//   return <ul>{htmlItems}</ul>;
// }

// When rendering a list of elements in React, we need to provide a key prop to each element. This is a unique identifier for each element in the list.
// You can also do this in-line, rather than creating a separate variable for the html elements. This is a common pattern to see in React code. In this case, we’re rendering the resulting object of HTML elements returned by the map method after applying the callback function to the original array.

function App() {
  const fruits = ["Apple", "Pear", "Banana"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

// always wrap js in curly brackets inside components!!
// The key prop is used by React to keep track of which elements have changed, been added or been removed from the list. It’s important that the key prop is unique for each element in the list, and that it doesn’t change between renders. Using a loop index is not appropriate here, because in a list of three items removing the middle item would cause the entire list to re-render. Ideally, removing the second item would remove that item, and replace it with the third item in it’s place.
export default App;