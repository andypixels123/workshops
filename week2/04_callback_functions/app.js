console.log("Is this working?");

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();// parameter is now a function call
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);


/*📝 Note!
    Notice that we don’t use () when we pass a function as an argument, but rather when we want to run the function - inside myAwesomeFunction
⛳️ We can also pass what’s known as an “anonymous function” as a callback - this is what we often do when using JavaScript event handlers.
*/

function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});
// short hand version
myAwesomeFunction(() => {// arrow function
  console.log("notifyUser function was called!");
});

// above works ok


//⛳️ We can pass more than one function in. For example, one to run on success, and one to run on failure. And we can also pass arguments to the callback functions and use them.

function myAwesomeFunc(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;// const is boolean
  if (success) {// true
    onSuccessCallback({
      message: "This is the message of success",// this is 'data' parameter
    });
  } else {// < 0.5 // false
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunc(onAwesomeSuccess, onAwesomeFailure);

// above works


//⛳️ To really grasp this core concept of JavaScript, think about some of the basic mathematical functions
//  that we looked at in previous classes. Write a function that accepts three arguments:
// two numbers, and a callback function that handles performing the mathematical operation using
// the two numbers.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
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

const result3 = myCalculatorFunction(20, 30, divide); // my function
console.log(result3); // Output:

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9


//💭 This is the basis of events and asynchronous code in JavaScript. When we create events,
// we are passing in a callback function, which the event handler will call for us when the
// event occurs. You’ll see this pattern in event handlers all the time:

// button.addEventListener("click", handleClick);

//🎯 Create some additional mathematical operation functions that you can pass in to your
// calculator function. You could try dividing and subtracting, you could try comparing two
// numbers to see if they’re the same and return the result.