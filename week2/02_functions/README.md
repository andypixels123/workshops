
Functions
Overview

A function is a self contained “block” of code (code inside { curly brackets }) that performs some kind of task.

Functions are for breaking up larger problems into smaller, reusable pieces.

By giving our functions descriptive names, we make our code easier to read and understand.
Class Plan

    Demo: Demonstration of functions and how they work
    Workshop: Write some functions to solve some problems

Learning Objectives

    What is a function?
    How to write a function
    How to call a function
    How to pass arguments to a function
    How to return a value from a function

Success Criteria

    I can write a function that accepts arguments when invoked
    I can write a function that has parameters
    I know how to return a value from a function

Resources

    MDN: Functions
    MDN: Function Declaration

Workshop
Setup

⛳️ Create a new index.html file and an app.js file.

⛳️ In your index.html, add the line of code in the head which will link to your app.js:

<script src="app.js" defer></script>

⛳️ In your app.js create a console.log() like the one below to check that files are connected and working. “Go Live” to view your project in your browser and check the console to see the output!

console.log("Hello world!");

Declaring functions

⛳️ Create a function called sayHello and wrap the console.log in it. Underneath the “function declaration”, call the function by referring to it using round brackets. Using the brackets after the function name executes the function – it runs the code defined inside the function. You can run it as many times as you want.

function sayHello() {
  console.log("Hello world!");
}

sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!

Arguments

Functions can accept any number of “arguments”. When defining a function, we name each of the arguments. They’re similar to other variables, except they’re only available inside this function.

function argumentFunction(argument1, argument2) {
  console.log(argument1, argument2);
}

When we call the function, we pass in the information that will be represented by each argument in the function.

⛳️ Add a new function called sayHelloTo that accepts a single argument called userName. Use the argument in the function to say hello to the person you pass in as an argument.

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!

    👀 Important

    A function can accept any number of arguments. It’s important, so bears repeating!

We might wish to vary our greeting, and use something other than hello.

We can add a second argument to the function:

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob"); // Output: Good morning Bob!
greet("Buenos dias", "Alice"); // Output: Buenos dias Alice!
greet("Bonjour", "Charlie"); // Output: Bonjour Charlie!

Returning values

So far we’ve been console logging in the functions, but we can also return a value from a function to the “call site” - allowing us to retrieve the result of the task the function performed, and use it in the location where we called the function.

⛳️ Create a function called add that accepts two arguments, a and b. Return the result of adding the two numbers together.

function add(a, b) {
  return a + b;
}
// If you want another way of thinking about this, we could say that '1 + 5' returns the number 6! In programming, we need to be explicit and say - hey, this is the 'returned' result of all the operations we've done in a function.

const result = add(1, 5);
console.log("The result is", result); // Output: The result is 6
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: Another result is 12

⛳️ Create a function called multiply that accepts two numbers as arguments, a and b. Return the result of multiplying the two numbers together.

⛳️ Create a function called subtract that accepts two numbers as arguments, a and b. Return the result of subtracting the two numbers.

⛳️ Create a function called divide that accepts two arguments, a and b. Return the result of dividing the two numbers.

⛳️ Create a function called calculate that accepts three arguments, a, b and operator. Return the result of calling the appropriate function for the operator.

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

You can also use the switch statement to achieve the same result, while potentially being slightly easier to read:

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

🎯 Use the function to perform calculations. Run it with node calculator.js or load it in the browser with a script tag.

const result = calculate(1, 5, "+");
console.log("The result is", result); // Output: The result is 6

const anotherResult = calculate(2, 10, "*");
console.log("Another result is", anotherResult); // Output: Another result is 20

🎯 Mini Challenge: Write a function which converts miles to kilometers

    The function will always take a number as a parameter.
    It should convert that number into its kilometer equivalent.
    It should return a number after conversion.

💭 Rules

    You can search for how to convert miles to kilometers.
    You can console.log() your result like so:

console.log(convertMiles(25));

🏹 Stretch Goal

Edit the function so that it can take two parameters; a distance and what to convert it to.

The function should decide if it’s been asked for ‘miles’ or ‘kilometers’, perform the conversion appropriately, and return the correct number.
