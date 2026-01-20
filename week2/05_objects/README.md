
Objects and Complex Objects
Overview

Objects are a way to group information about a thing together. They’re a way to represent a particular thing, like a blog post, or a spaceship, or a person, and all of the properties you might want to record related to it.

For example, a person object might have a name, age, and favourite colour. A car object might have a make, model, and colour. A blog post might have a title, an author, and post content.

Objects can contain other objects, arrays, and arrays of objects. This allows us to represent more complex data structures. This is called a ‘complex object’.

For example, a blog post might have an author, and the author might have a name, age, and favourite colour. The blog post might also have a list of tags associated with it.
Class Plan

    Demo: Demonstration of objects and how they work
    Demo: Demonstration of complex objects and how they work
    Workshop: Write some objects to the console
    Workshop: Write some complex objects to the console

Learning Objectives

    What is an object and a complex object?
    How to create an object and a complex object
    How to access properties on an object and a complex object
    How to add properties to an object and a complex object

Success Criteria

    I can give a definition of an object.
    I can explain why we use objects.
    I can write an object and complex object using the correct syntax.
    I can access object properties using dot notation.
    I can add new properties to an object using dot notation.

Resources

    MDN: Objects
    MDN: Object basics

Workshop
Setup

⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!

⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.

console.log("Hello world!");

This is just to test and ensure your app.js is setup correctly before we continue.
Creating objects

⛳️ Create an object called person with a name, age, and favourite colour. Log the object to the console.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);

You can also log objects using the console.table method, which will display the object in a table format.

console.table(person);

Accessing properties

You can access properties on an object using the dot notation. The dot notation is how you access specific properties of an object.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person.name); // Output: Bob

console.log(person.age); // Output: 30

console.log(person.favouriteColour); // Output: red

Adding properties

You can add properties to an object by assigning a value to a new property.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

person.favouriteFood = "pizza";

console.log(person.favouriteFood); // Output: pizza

Creating complex objects

⛳️ In the same app.js file, create an object called blogPost with a title, author, and tags. Log the object to the console.

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

Accessing properties in complex objects

Objects inside objects, like the author object here, are accessible by chaining the dot notation together.

console.log(blogPost.author.name); // Output: Bob

Arrays inside objects are accessible by using the index of the item in the array.

console.log(blogPost.tags[0]); // Output: coding

You can print out the number of tags by checking the length of the tags array:

console.log(blogPost.tags.length); // Output: 4

You can combine this with a traditional for loop:

!! Note - Template literals (Just read the template literals section, not the tagged template literals for now)

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
}

Or use a for of loop if you don’t need the index:

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}

🎯 Mini Challenge: Objects everywhere

    Challenge 01:
        Create an object called car with a make, model, and colour.
        Create a string detailing the car’s make, model, and colour for a website advert.
        Log that string to the console.

    Challenge 02:
        Create an object called book with a title, author, and number of pages.
        Create a string explaining the book’s details for a website advert.
        Log it to the console.

💭 Help

    Combine everything you’ve learned in this lesson to work on the challenges!

