// The Document Object Model (The DOM)

console.log("Hello Hello Hello");

const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1);

const h2 = document.createElement("h2");
h2.textContent = "This is an H2 heading!";
body.appendChild(h2);

h1.remove();

// create a list element, add items to list,
//  add list to body, style list with DOM manipulation
const myList = document.createElement("ol");
const firstItem = document.createElement("li");
const secondItem = document.createElement("li");
const thirdItem = document.createElement("li");
firstItem.textContent="Item 1";
secondItem.textContent="Item 2";
thirdItem.textContent="Item 3";
myList.appendChild(firstItem);
myList.appendChild(secondItem);
myList.appendChild(thirdItem);
body.appendChild(myList);
firstItem.style.color = "orangered";
secondItem.style.color = "lightgreen";
thirdItem.style.color = "skyblue";