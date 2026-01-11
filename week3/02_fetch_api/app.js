// console.log("is this working?");

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }

// getData();

// Parsing the response

// When expecting JSON from an API, we can use the response.json() method to parse the response body as JSON. You might be asking yourself why it’s a ‘seperate’ step. Thats because you might want to parse the response body in a different format - like .blob() or .html(). For what we’re doing on the course, we’re going to stick to json(). Like in Local Storage, the JSON comes over the network as a string - the response.json() function turns it back into a JavaScript object we can access with object dot notation.

// The JSON() function is used in various programming languages to convert a JavaScript object into a JSON (JavaScript Object Notation) string. This JSON string is a text-based format that is ideal for storing or transmitting data, for example, between a web server and a client.

// 🎯 Mini Challenge: You’re a GitHub Star

// You’re going to use the Github API to show some information about one of your repositories on a webpage.

//     Make a fetch request to the Github API for one of your public repositories.
//         The API endpoint “repos” can be called like this: https://api.github.com/repos/facebook/react
//     Replace “facebook” with your own username, and “react” with the name of your repository.
//     From the JSON object returned, access the stargazers_count and update your page to display the value by creating a DOM element and setting it’s content to that value.

// 💭 Help

//     Remember to log that data you get back and search through the object to find the right property.
//     More Github API details can be found in the docs: Github API Documentation
//     You can use this approach to show your live Github repo or profile information on your portfolio page.

// 🏹 Stretch Goal

// Make more than one fetch request to get data about other repos and add more information about each to the page.

async function getData() {
    const response = await fetch("https://api.github.com/repos/andypixels123/workshops");
    // const response = await fetch("https://api.github.com/repos/Tech-Educators/software-dev-023");
    // console.log("HTTP Response:", response);
    const json = await response.json();
    console.log("JSON Data:", json);
    // console.log(json.stargazers_count);
    const pElem = document.createElement("p");
    const pText = `stargazers count = ${json.stargazers_count}`;
    pElem.textContent = pText;
    document.body.appendChild(pElem);
}

getData();

// Resources:
// https://http.cat/
// https://github.com/public-apis/public-apis?tab=readme-ov-file
// https://randomfox.ca/
// https://unsplash.com/developers