console.log("Is this working?");

const myName = "Bob";

function sayHello() {
  console.log("Hello " + myName + "!");
}

sayHello(); // Output: Hello Bob!
console.log(myName); // Output: Bob

/* 🎯 Mini Challenge: Working with scope

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
*/

let favoriteColour = "blue";

function printColour() {
    let favoriteColour = "red";
    console.log(favoriteColour);
}

printColour();
console.log(favoriteColour);
