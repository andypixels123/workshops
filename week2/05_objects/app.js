//⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!
//⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.
console.log("Hello world!");
//⛳️ Create an object called person with a name, age, and favourite colour. Log the object to the console.
const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};
console.log(person);
//You can also log objects using the console.table method, which will display the object in a table format.
console.table(person);

//Accessing properties
//You can access properties on an object using the dot notation. The dot notation is how you access specific properties of an object.
const persons = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};
console.log(persons.name); // Output: Bob
console.log(persons.age); // Output: 30
console.log(persons.favouriteColour); // Output: red

//Adding properties
//You can add properties to an object by assigning a value to a new property.
const persoN = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};
persoN.favouriteFood = "pizza";
console.log(persoN.favouriteFood); // Output: pizza

//⛳️ In the same app.js file, create an object called blogPost with a title, author, and tags. Log the object to the console.
const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

//Accessing properties in complex objects
//Objects inside objects, like the author object here, are accessible by chaining the dot notation together.
console.log(blogPost.author.name); // Output: Bob
//Arrays inside objects are accessible by using the index of the item in the array.
console.log(blogPost.tags[0]); // Output: coding
//You can print out the number of tags by checking the length of the tags array:
console.log(blogPost.tags.length); // Output: 4
//You can combine this with a traditional for loop:
// Note - Template literals (Just read the template literals section, not the tagged template literals for now)
console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
}
//Or use a for of loop if you don’t need the index:
console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}


//🎯Mini Challenge: Objects everywhere

// Challenge 01:
// Create an object called car with a make, model, and colour.
// Create a string detailing the car’s make, model, and colour for a website advert.
// Log that string to the console.

// Challenge 02:
// Create an object called book with a title, author, and number of pages.
// Create a string explaining the book’s details for a website advert.
// Log it to the console.

const car = {
    make:"ford",
    model:"fiesta",
    colour:"silver"
}

console.log(`Get a brand new ${car.make} ${car.model} in ${car.colour} for £18,995`);

const book = {
    title: "Fly Fishing",
    author: "J.R.Hartley",
    pageCount: "200"
}

console.log(`New ${book.pageCount}-page long book entitled '${book.title}' by the author '${book.author}' now available to buy.`);
