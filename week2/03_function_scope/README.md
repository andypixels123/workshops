
Function Scope
Overview

We’ve looked at how we can use functions to break code up into smaller, reusable pieces. We’ve also looked at how to use functions to receive data as arguments, and return data as a result.

Function code blocks also have access to the variables defined outside of the function, in the parent code block. This is called “scope”. The scope of the variable is the area of code where that value is available. Outside of that scope it might as well not exist.
Class Plan

    Demo: Demonstration of function scope and how it works
    Workshop: Write some functions to solve some problems

Learning Objectives

    What is scope?
    How to create variables in the function scope
    How to create variables in the global scope

Success Criteria

    I can explain what “scope” is
    I can make an informed decision for when to use block scoped or global scoped variables

Resources

    MDN: Scope
    MDN: let
    MDN: const

Workshop
Setup

⛳️ Create a new index.html file and an app.js file.

⛳️ In your index.html, add the line of code in the head which will link to your app.js:

<script src="app.js" defer></script>

⛳️ In your app.js create a console.log() like the one below to check that files are connected and working. “Go Live” to view your project in your browser and check the console to see the output!

console.log("Hello world!");

Accessing variables in the global scope

⛳️ Create a variable called myName and assign it a value. Create a function called sayHello that logs a greeting to the console. Log the object to the console.

const myName = "Bob";

function sayHello() {
  console.log("Hello " + myName + "!");
}

sayHello(); // Output: Hello Bob!
console.log(myName); // Output: Bob

Creating variables in the function scope

Variables defined inside a function are only available inside that function. They’re not available outside of the function.

function sayHello() {
  const myName = "Bob";
  console.log("Hello " + myName + "!");
}

sayHello(); // Output: Hello Bob!

console.log(myName); // Output: Uncaught ReferenceError: myName is not defined

    📝 Note!

    Variables that are only scoped within a function can be forgotten, saving memory. If we only used global variables, we could never clear anything up behind us - they’ll ‘always’ exist in memory.

    It’s worth noticing that with scoped functions you can reuse variables within functions without worrying about pollution or functions affecting other. Global scoped variables used within more than one function could lead to conflicts and unexpected results, as both functions might try to alter the global variable at the same time.

🎯 Mini Challenge: Working with scope

This challenge aims to help you see how scope works.

    Create a variable called favoriteColour and assign it a string value in the global scope (outside of any function).
    Write a function called printColour that:
        Declares a new variable called favoriteColour inside the function and assigns it a different string value.
        Logs the value of favoriteColour from within the function.
    After defining the function, add code that:
        Calls printColour().
        Logs the value of favoriteColour from the global scope.

You should see an output similar to this in your console:

red
blue

💭 Rules

    Write and test your own code in app.js
    Make sure the global and function variables have different values so you can see function scope in action.

