// Let’s look at what happens when we conditionally render using the && operator with an array’s .length. Try putting the following code in your return statement for ListItems :
// If the items array is empty, items.length is 0. Since 0 is falsy, the && short-circuits and returns 0. React renders that 0 directly onto the page. That’s not what we want!

// function ListItems() {
//       const items = [];
//     return (
//         <ul>
//             {items.length && items.map(item => <li key={item.id}>{item.title}</li>)}
//         </ul>
//     )
// }

// The solution is to use the ternary operator instead.
function ListItems() {
    const items = []; // returns 'No items'
    // const items = ["1","2","3"]; // returns items in list

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.length > 0 ? (
                    items.map((item) => <li key={item}>{item}</li>)
                ) : (
                    <li>No items</li>
                )}
            </ul>
        </div>
    );
}

export default ListItems;