
Loops
Overview

Loops let us repeat a line of code multiple times. Like the if statement, a loop is one of the most useful constructs in programming.

They’re used to do the same thing a number of times, or for doing something with each item in a list of things.

For example, if you want to list the 5 most recent blog posts on your website, you could use a loop to show each one using the same HTML.
Class Plan

    Demo: Demonstration of loops and how they work
    Workshop: Write some loops to print array items to the console

Learning Objectives

    What is a loop?
    How to write a loop
    How to use a loop
    How to loop over an array

Success Criteria

    I can give a definition of a loop and the different types of loops.
    I can give 3 examples of use cases where loops are useful.
    I can write a for loop and a while loop using the correct syntax.
    I can write an array method, for example forEach, to loop through an array.

Resources

    MDN: Loops and iteration
    MDN: for
    MDN: while

Workshop

There are two primary kinds of loops in JavaScript: for and while. They’re the same in the way that both repeatedly run the code within their block brackets, {}. The difference is for loops are best when you know how many iterations you want to run the loop for, while while loops are useful when you aren’t sure.
Setup

⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!

⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.

console.log("Hello world!");

This is just to test and ensure your app.js is setup correctly before we continue.

⛳️ Create a for loop that runs 5 times. Log the current iteration to the console.
for loops

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

    👀 Important

    It’s important to grasp that the ‘update/afterthought’ section of a for loop, like i++, executes only after the code within the braces is run. Also, once the loop begins, the initialization of i to 0 does not repeat; the loop merely continues to check the condition before each new iteration.

while loops

while loops will run until the condition in their brackets is false. They’re useful when you don’t know how many times you want to run the loop. It may be that you only increment the counter on certain conditions, or that you want to run the loop until a random number that meets a certain condition is generated.

⛳️ Create a while loop that runs until the counter reaches 5. Log the current iteration to the console.

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

⛳️ Create a while loop that runs until Math.random() returns a value lower than 0.1. If the value is lower than 0.1, set keepLooping to true which will stop the loop.

    📝 Note!

    Math.random() is a function inbuilt to JavaScript that returns a random floating point (similar to demcimal) value between 0 and 1.

let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

Looping over arrays

⛳️ Create an array of your favourite foods. Loop over the array and log each item to the console.

Notice how the index used by the for loop is used to log out a different item in the array each time the loop iterates, and how the condition of the for loop is the length of the array.

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

Alternative syntax for loops for arrays

There are two other types of for loop in modern JavaScript you can use to iterate over arrays.

The first is the for...of loop. It’s similar to the regular for loop, but it’s more concise and easier to read. It can be less versatile because it doesn’t give you access to the index of the item in the array.

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

The second is the forEach method. It’s a method on all arrays, and it accepts a function as an argument. The function is called for each item in the array, and is passed the item as an argument.

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
foods.forEach(function (food) {
  console.log(food);
});

The forEach array method also passes the array index to the anonymous function, so you can use it if you need to.

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
foods.forEach(function (food, index) {
  console.log(index, food);
});

🎯 Mini Challenges: Let’s get loopy

Use as many loop types as you can to achieve the following

    Challenge 01:
        Create an array of your favourite animals, loop over the array and write it to the console.
        Try a for loop

    Challenge 02:
        Create an array of your favourite colours, loop over the array and write it to the console.
        Try a forEach loop

    Challenge 03:
        Create an array of your favourite numbers, loop over the array and log each item to the console. Infinity is a number in JavaScript. (But learn how to kill your browser tabs in task/activity manager before you loop until i = Infinity!)
        Try a while loop

