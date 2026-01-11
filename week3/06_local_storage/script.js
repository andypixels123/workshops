// REMEMBER - LOCAL STORAGE IS PERSISTENT
// Saving data to local storage
const input = document.querySelectorAll("input");
const form = document.querySelector("form");
// 🎯 Add a “Reset to defaults” button that resets everything to a set of default values.
const reset = document.getElementById("reset");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const colour = formData.get("colour");
//     localStorage.setItem("colour", colour);
// });

// Retrieving data from Local Storage
// const colour = localStorage.getItem("colour");
// if (colour) {
//     const input = document.querySelector("input");
//     input.value = colour;
// }
// Refresh the page, and the input should populate with your saved value.

// JSON
// The Local Storage Key/Value store doesn’t accept complex objects or functions. It will only accept strings. In order to save a simple object we need to convert it to a string, and then convert it back into an object when we retrieve it.
// We can do this using the JSON.stringify and JSON.parse methods.

function savePreferences(event) {
    event.preventDefault();
    const formData = new FormData(form); // object containing all form data
    const colour = formData.get("colour"); // input name="colour"
    console.log(colour);
    const bgCol = formData.get("bgCol"); // input name="bgCol"
    console.log(bgCol);
    // preferences is now an object, it might contain other preferences...
    const preferences = { // new object
        colour,
        bgCol
    };
    console.log(preferences);
    // so when we save it, we stringify it
    localStorage.setItem("preferences", JSON.stringify(preferences));
    // view in browser dev WebTransportBidirectionalStream, storage -> local storage
}


// then we parse the string back into an object when we retrieve it
const preferences = JSON.parse(localStorage.getItem("preferences"));
if (preferences) {
    const input = document.querySelectorAll("input");
    input[0].value = preferences.colour;
    input[1].value = preferences.bgCol;
}
// Refresh the page, and the input should populate with your saved value.

// Applying preferences
// To apply the preferences we’ll need to read the preference values on page load and update the page to reflect them. If we use the colour to represent the text colour, we could apply the colour code to the body of the page.

function loadPreferences() {
    // load the prefs
    const preferences = JSON.parse(localStorage.getItem("preferences"));
    // if we have some prefs
    if (preferences) {
        // set the form value
        input[0].value = preferences.colour || "default colour is green"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved
        input[1].value = preferences.bgCol || "default colour is light blue";
        // set the body color to the user colour preference
        document.body.style.color = preferences.colour || "green";
        document.body.style.backgroundColor = preferences.bgCol || "lightblue";
    }
}


// Clearing Local Storage
// In case you need it, you can remove items from local storage with the removeItem method.

function clearPreferences(event) {
    event.preventDefault(); // The preventDefault() method in JavaScript is used to stop the default action associated with an event from occurring.
    // localStorage.removeItem("colour");
    localStorage.removeItem("preferences");
    const defaults = { // default colour
        colour: "#000000",
        bgCol: "yellow",
        inputs: "" // clear input field
    };

    document.body.style.color = defaults.colour;
    document.body.style.backgroundColor = defaults.bgCol;
    input[0].value = defaults.inputs;
    input[1].value = defaults.inputs;
}


// Observing Local Storage values changing
// It’s useful to be aware that you can listen for local storage values changing. This is useful when users have more than one tab open on your site. Updating a colour preference on one tab can be picked up in all the others.

// Function to handle changes in local storage
// function handleLocalStorageChange(event) {
//     if (event.key === "favouriteColour") {
//         // Do something when the specific local storage key changes
//         const newValue = event.newValue;
//         console.log(`Local storage favouriteColour changed to: ${newValue}`);
//     }
// }

form.addEventListener("submit", savePreferences);
form.addEventListener("submit", loadPreferences);
// document.body.style.color = preferences.colour || defaults.colour;
reset.addEventListener("click", clearPreferences);
// Add an event listener to listen for changes in local storage
// window.addEventListener("storage", handleLocalStorageChange);


// 🎯 Mini Challenge: Personalised Page Preferences
// You’ve already edited the background colour of the body.
//     Add some more user preferences to the page, and action the preferences when the page loads so that your background colour, font size, etc. or whatever features you want can be edited, saved and restored to the user’s preferences.
//     Go to town!
// 🏹 Stretch Goal
// If you have hosted images you can save URLs in there too!