
Callback Functions in JavaScript
Overview

We’ve looked at how we can define functions to break code up into modular, reusable pieces that accept some data, do something with it, and then return something else. We’ve seen how we we can compose these functions together like lego bricks to achieve the outcomes we desire.

Functions can also receive other functions as arguments. These are called “callback functions”. Callback functions are used to pass behaviour into other functions. This allows us to write more universal functions that can be reused in different situations. The functions you pass to an event listener for a button click event? That’s a callback function. You may have been using them without knowing the name.

Callbacks are a fundamental aspect of JavaScript and allow us to pass functions and code to run in situations like handling user mouse clicks, typing in form fields and more.

A callback function can be thought of similarly to any other variable argument you pass to a function - except instead of holding information, it holds functionality. You utilise that functionality by running it with parenthesis runFunction() like any other, perhaps providing arguments only available to you now - not when that function was defined, or passed in.
Class Plan

    Demo: Demonstration of a callback function - passing a function to another function, and running the code
    Workshop: Experiments with callback functions

Learning Objectives

    What is a callback function?
    How to use callback functions in context

Success Criteria

    I can explain in my own words what a callback function is.
    I can write a function with parameters using the correct syntax.
    I can pass a function as an argument to another function.

Prior Knowledge

    JavaScript Functions, arguments, and return values

Resources

    Callback Functions
    Callback Functions

Workshop
Setting up

⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!

⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.

console.log("Hello world!");

This is just to test and ensure your app.js is setup correctly before we continue.
Callback Functions

Callback functions are what we call functions that are passed to other functions, to be run when the other function decides. They’re a common feature of JavaScript code and enable us to write more reusable code.

⛳️ Define two functions. One that echoes out a string to the console, and one that takes a single argument called myCallbackFunction.

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

    📝 Note!

    Notice that we don’t use () when we pass a function as an argument, but rather when we want to run the function - inside myAwesomeFunction

⛳️ We can also pass what’s known as an “anonymous function” as a callback - this is what we often do when using JavaScript event handlers.

function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

    💭 Tip!

    This can also be defined as an arrow function, which in this case is just a short hand way of writing the same anonymous function, without the need for the function keyword. There are other differences we’ll learn later, but they’re not relevant for this class.

myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

⛳️ We can pass more than one function in. For example, one to run on success, and one to run on failure. And we can also pass arguments to the callback functions and use them.

function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

⛳️ To really grasp this core concept of JavaScript, think about some of the basic mathematical functions that we looked at in previous classes. Write a function that accepts three arguments: two numbers, and a callback function that handles performing the mathematical operation using the two numbers.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

    📝 Note!

    This is a contrived example, but it shows how we can pass a function as an argument to another function, and use it to perform a task inside the other function.

💭 This is the basis of events and asynchronous code in JavaScript. When we create events, we are passing in a callback function, which the event handler will call for us when the event occurs. You’ll see this pattern in event handlers all the time:

button.addEventListener("click", handleClick);

🎯 Create some additional mathematical operation functions that you can pass in to your calculator function. You could try dividing and subtracting, you could try comparing two numbers to see if they’re the same and return the result.
