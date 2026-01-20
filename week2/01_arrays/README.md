
Arrays
Overview

Arrays are a way to group multiple items together. They’re a way to represent a list of things.

For example, a list of blog posts, a list of comments, a list of users. They’re very useful for dealing with large amounts of data, especially with ‘loops’ which we’ll be learning shortly.
Class Plan

    Demo: Demonstration of arrays and how they work
    Workshop: Write some arrays to the console

Learning Objectives

    What is an array?
    How to create an array
    How to access items in an array
    How to add items to an array

Success Criteria

    I can give a definition of an array.
    I can explain why we use arrays.
    I can write an array using the correct syntax.
    I can access items in an array using the index and length properties.

Resources

    MDN: Arrays
    MDN: Array basics
    Digital Ocean: Understanding Arrays

Workshop
Setup

⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!

⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.

console.log("Hello world!");

This is just to test and ensure your app.js is setup correctly before we continue.
Creating arrays

⛳️ Create an array called blogPosts with a list of blog post titles. Log the array to the console.

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

Accessing items

You can access items in an array using the index of the item in the array. The index starts at 0, so the first item in the array is at index 0, the second item is at index 1, and so on.

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts[0]); // Output: My first blog post
console.log(blogPosts[1]); // Output: My second blog post
console.log(blogPosts[2]); // Output: My third blog post

Adding items

You can add items to an array by assigning a value to a new index, although this isn’t done a lot.

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

blogPosts[3] = "My fourth blog post";

console.log(blogPosts[3]); // Output: My fourth blog post

Side note

It’s worth noting that arrays in JavaScript can contain different data types (including other arrays) - in practicality, this isn’t done that often.

const randomList = ["important reminder", 42, ["another array"], true];

🎯 Mini Challenge: Create some arrays

    ⛳️ Create an array called favouriteFoods with a list of your favourite foods. Log the array to the console.

    ⛳️ Create an array called favouriteColours with a list of your favourite colours. Log the array to the console.

    ⛳️ Create an array called favouriteNumbers with a list of your favourite numbers. Log the array to the console.

🏹 Stretch Goal

    Log one individual item from each array to the console in one console.log()

