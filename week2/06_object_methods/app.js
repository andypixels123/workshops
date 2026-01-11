//Workshop
//Creating methods
//⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!
//⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.
//console.log("Hello world!");
//This is just to test and ensure your app.js is setup correctly before we continue.
//⛳️ Create an object called person with a name, age, and favourite colour. Add a method called sayHello that logs a greeting to the console. Log the object to the console.

//const person = {
//  name: "Bob",
//  age: 30,
//  favouriteColour: "red",
//  sayHello: function () {
//    console.log("Hello!");
//  },
//};

// person.sayHello(); // Output: Hello!

// Passing arguments
// Methods can accept arguments, just like functions. They’re useful for adding behaviour to objects. For example, a person object might have a method called sayHello that logs a greeting to the console.

//const person = {
//  name: "Bob",
//  age: 30,
//  favouriteColour: "red",
//  sayHello: function (name) {
//    console.log("Hello " + name + "!");
//  },
//};

//person.sayHello("Alice"); // Output: Hello Alice!

// Returning values
// Methods can return values, just like functions. They’re useful for adding behaviour to objects. For example, a person object might have a method called getAge that returns the person’s age.

//const person = {
//  name: "Bob",
//  age: 30,
//  favouriteColour: "red",
//  getAge: function () {
//    return this.age;
//  },
//};

//const age = person.getAge();
//console.log(age); // Output: 30

// 🎯 Mini Challenge: Magic methods.
// These challenges might look similar to the ones in the Objects workshop, but pay attention as they are different!

//    Challenge 01:
//        Create an object called car with a make, model, and colour.
//        Add a method called advert that returns a string detailing the car’s make, model, and colour.
//        Log the result of calling the method to the console.

//    Challenge 02:
//        Create an object called book with a title, author, and number of pages.
//        Add a method called advert that returns a string explaining the book’s details for a website advert.
//        Log the result of calling the method to the console.


// REVISED CODE -------------------------------------------
// added returns

const car = {
    make:"ford",
    model:"fiesta",
    colour:"silver",
    advert: function() {
         //const advert =`Get a brand new ${car.make} ${car.model} in ${car.colour} for £18,995`;
        // return advert;
        // console.log(`Get a brand new ${car.make} ${car.model} in ${car.colour} for £18,995`);
        return `Get a brand new ${car.make} ${car.model} in ${car.colour} for £18,995`
    }
}

const carAdvert = car.advert();
console.log(carAdvert);

const book = {
    title: "Fly Fishing",
    author: "J.R.Hartley",
    pageCount: "200",
    advert: function() {
       // console.log(`New ${book.pageCount}-page long book entitled '${book.title}' by the author '${book.author}' now available to buy.`);
       return `New ${book.pageCount}-page long book entitled '${book.title}' by the author '${book.author}' now available to buy.`
    }
}

const bookAdvert = book.advert();
console.log(bookAdvert);