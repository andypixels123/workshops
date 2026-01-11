console.log("Is this working?");

function sayHello() {
    console.log("Is this working?");
}

sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob"); // Output: Good morning Bob!
greet("Buenos dias", "Alice"); // Output: Buenos dias Alice!
greet("Bonjour", "Charlie"); // Output: Bonjour Charlie!

function add(a, b) {
  return a + b;
}
// If you want another way of thinking about this, we could say that '1 + 5' returns the number 6! In programming, we need to be explicit and say - hey, this is the 'returned' result of all the operations we've done in a function.

const result = add(1, 5);
console.log("The result is", result); // Output: The result is 6
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: Another result is 12

//⛳️ Create a function called multiply that accepts two numbers as arguments, a and b. Return the result of multiplying the two numbers together.
//⛳️ Create a function called subtract that accepts two numbers as arguments, a and b. Return the result of subtracting the two numbers.
//⛳️ Create a function called divide that accepts two arguments, a and b. Return the result of dividing the two numbers.
//⛳️ Create a function called calculate that accepts three arguments, a, b and operator. Return the result of calling the appropriate function for the operator.

function multiply(a,b) {
  return a * b;
}
function subtract(a,b) {
  return a - b;
}
function divide(a,b) {
  return a / b;
}
function sumResult(a,b,operator) {
  switch(operator) {
    case "+": return a + b;
    break;
    case "-": return a - b;
    break;
    case "*": return a * b;
    break;
    case "/": return a / b;
  }
}

/*

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

*/
console.log(sumResult(10,3,"+"));
console.log(sumResult(10,3,"-"));
console.log(sumResult(10,3,"*"));
console.log(sumResult(10,3,"/"));

/*
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

*/

let pEls = document.getElementsByTagName("p");
console.log(pEls);

function converter(conversion, x) {
    switch(conversion) {
        case "miles-km": return x * 1.60934;
        break;
        case "cm-inch": return x / 2.54 ;
        break;
        case "pounds-kg": return x * 0.453592;
    }
}
let miles = 25;
let cm = 25;
let pounds = 25;

//console.log(miles + " miles = " + converter("miles-km", miles) + " kilometers");
//console.log(cm + " centimeters = " + converter("cm-inch", cm) + " inches");
//console.log(pounds + " pounds = " + converter("pounds-kg", pounds) + " kilograms");

let kmConversion = miles + " miles = " + converter("miles-km", miles) + " kilometers";
let inchConversion = cm + " centimeters = " + converter("cm-inch", cm) + " inches";
let poundsConversion = pounds + " pounds = " + converter("pounds-kg", pounds) + " kilograms";

pEls[0].textContent = kmConversion;
pEls[1].textContent = inchConversion;
pEls[2].textContent = poundsConversion;