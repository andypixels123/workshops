// JS: Primitive Data Types
console.log("Hello world!");
let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;
console.log(sweets);
let myName = "Bob";
console.log(myName);
let firstName = "Bob";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName);
firstName = "Billy";
console.log(`${firstName} is ${firstName.length} characters long`);
console.log(`${firstName.length}` + `${lastName.length} characters long`);

let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);
let nameA = "Bob";

// typeof operator
console.log(typeof nameA);
let number = 1;
console.log("The type of number is " + typeof number);
let isVerytrue = true;
console.log(`The type of isVerytrue is ${typeof isVerytrue}`);

// undefined and null
let nameB;
console.log(nameB); // Output: undefined
let age = null;
console.log(age);

// make comparisons and return a boolean value 
let a = 25;
let b = 1001;
let isAGreaterThanB = a > b;// returns true or false
let isALessThanB = a < b;
let isAEqualToB = a === b;
console.log(isAGreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToB);

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);
console.log(`Is ${a} less than ${b}?`, isALessThanB);
console.log(`Is ${a} equal to ${b}?`, isAEqualToB);

// Use string literals and some variables to write out a sentence
// containing different variables, so you can change what the sentence
// says by updating the variables. For example, a simple one might look like this:
let favouriteProgrammingLanguage = "JavaScript";
let currentCourseDay = 3;
const sentence = `My favourite programming language is ${favouriteProgrammingLanguage}.
 We're on day ${currentCourseDay} of the course.`;
console.log(sentence);

let carType = "sports";
let buildingType = "skyscrapers";
let carColour = "red";
// sentence from Google AI
let mySentence = `The gleaming ` + carColour + ` ${carType} car zoomed past the towering ${buildingType}, a flash of color in the blur of city traffic.`;
// console.log(mySentence);
document.getElementById("sentence").innerHTML = mySentence;
carType = "corgi";
buildingType = "bungalows";
carColour = "pink";
mySentence = `The gleaming ` + carColour + ` ${carType} car zoomed past the towering ${buildingType}, a flash of color in the blur of city traffic.`;
document.getElementById("sentenceTwo").innerHTML = mySentence;
