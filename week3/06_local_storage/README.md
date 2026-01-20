
Web Storage: Local Storage
Overview

Web Browsers provide a number of different ways to store data for a user locally, in the browser. It’s called “Web Storage”, and the term includes a handful of different approaches to saving local user data. The first, and simplest, is “Local Storage”. Local Storage provides a simple API to set and get values, it’s a “Key-Value” store, a bit like a JavaScript object, but it persists between page reloads, and browser restarts.

It’s often not a good idea to use Local Storage like a full database, and it has limited size of around 5MB, but it’s a great way to store small amounts of data such as user preferences for colour schemes and themes.
Class Plan

    Demo: Demonstration of Local Storage, and real world examples where we use it (saving user preferences, etc.)
    Workshop: Make a simple app that saves user preferences to Local Storage and applies them to the page

Learning Objectives

    Using Local Storage to save user preferences
    Saving and retrieving items from Local Storage
    Saving objects with JSON.stringify
    Parsing objects with JSON.parse
    Clearing Local Storage

Success Criteria

    I can give examples of different kinds of data stored in local storage.
    I can find the Local Storage tab in the Application dev tool.
    I can insert data into local storage as a string.
    I can retrieve data from local storage and parse into an object.
    I can clear all data from local storage.

Required Knowledge

    JavaScript
    HTML
    CSS

Resources

    MDN: Web Storage
    MDN: Local Storage
    MDN: JSON
    MDN: JSON.stringify
    MDN: JSON.parse

Workshop
Saving data to Local Storage

⛳️ In a new project, create a new HTML file called index.html and add the following code:

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Local Storage</title>
  </head>

  <body>
    <h1>Local Storage</h1>
    <p>My favourite colour is:</p>
    <form>
      <input type="text" name="colour" />
      <button type="submit">Save</button>
    </form>
  </body>
</html>

⛳️ Create a new file called script.js, link it to your HTML, select the form, and get the value of the input. Log it to the console to check it’s working.

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});

⛳️ Enter a colour into the input and click the button.

👀 Open the Dev Tools, and go to the Application tab. In the left hand menu, click “Local Storage”, and you should see a key called “colour” with the value you entered. Each time you change the value and press the button, the value will update in realtime. Notice how when you refresh the page or close the browser, the value is still there when you visit the page.

💭 The storage is associated with the URL, including the port. Values saved on localhost:3000, are not available on localhost:5173.
Retrieving data from Local Storage

⛳️ In the script.js file, add the following code to retrieve the value from Local Storage and set it as the value of the input:

const colour = localStorage.getItem("colour");

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}

👀 Refresh the page, and the input should populate with your saved value.
JSON

The Local Storage Key/Value store doesn’t accept complex objects or functions. It will only accept strings. In order to save a simple object we need to convert it to a string, and then convert it back into an object when we retrieve it.

We can do this using the JSON.stringify and JSON.parse methods.

⛳️ In the script.js file, change the save an object to Local Storage:

const form = document.querySelector("form");

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  // preferences is now an object, it might contain other preferences...
  const preferences = {
    colour,
  };

  // so when we save it, we stringify it
  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

⛳️ In the script.js file, add the following code to retrieve the object from Local Storage:

// then we parse the string back into an object when we retrieve it
const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}

👀 Refresh the page, and the input should populate with your saved value.
Applying preferences

To apply the preferences we’ll need to read the preference values on page load and update the page to reflect them. If we use the colour to represent the text colour, we could apply the colour code to the body of the page.

⛳️ In the script.js file, add the following code to retrieve the object from Local Storage:

function loadPreferences() {
  // load the prefs
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  // if we have some prefs
  if (preferences) {
    // set the form value
    const input = document.querySelector("input");
    input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved

    // set the body color to the user colour preference (intentional US / UK spelling difference...)
    const body = document.querySelector("body");
    body.style.color = preferences.colour || "#000000";
  }
}

Clearing Local Storage

In case you need it, you can remove items from local storage with the removeItem method.

function clearPreferences(event) {
  event.preventDefault();

  localStorage.removeItem("preferences");
}

🎯 Add a “Reset to defaults” button that resets everything to a set of default values.

const defaults = {
  colour: "#000000",
};

body.style.color = preferences.colour || defaults.colour;

Observing Local Storage values changing

It’s useful to be aware that you can listen for local storage values changing. This is useful when users have more than one tab open on your site. Updating a colour preference on one tab can be picked up in all the others.

// Function to handle changes in local storage
function handleLocalStorageChange(event) {
  if (event.key === "favouriteColour") {
    // Do something when the specific local storage key changes
    const newValue = event.newValue;
    console.log(`Local storage favouriteColour changed to: ${newValue}`);
  }
}

// Add an event listener to listen for changes in local storage
window.addEventListener("storage", handleLocalStorageChange);

🎯 Mini Challenge: Personalised Page Preferences

You’ve already edited the background colour of the body.

    Add some more user preferences to the page, and action the preferences when the page loads so that your background colour, font size, etc. or whatever features you want can be edit, saved and restored to the user’s preferences.
    Go to town!

🏹 Stretch Goal

If you have hosted images you can save URLs in there too!
