
Using Fetch to Retrieve Data from a Third-Party API
Overview

One of the most common tasks in web development is retrieving data from an API and displaying it on the page. Most websites with comments, reviews, or user generated social content will use APIs to store and retrieve that content - usually from a database on a distant computer, perhaps on the other side of the world.

Browsers support the Fetch API, a common standard for making HTTP requests in your JavaScript code which enables this without any third party libraries.
Class Plan

    Demo: Demonstration of the Fetch API, what it does, and what we use it for
    Workshop: Write some code to retrieve data from an API and display it on the page

Learning Objectives

    What is an API?
    What is the Fetch API?
    How to make a request using the Fetch API
    How to handle the response from the Fetch API

Success Criteria

    I can explain in my own words how the Web Request Response Cycle works and how APIs fit into it.
    I can give 3 examples of use cases for APIs.
    I can use fetch to retrieve data from an API.
    I can evaluate the request data in the Network dev tool, including HTTP status codes.

Resources

    MDN: Fetch API
    MDN: HTTP Response

Workshop
Setup

⛳️ In a new project, create a index.html and an app.js file - remember to link your app.js to your html!

⛳️ Add a console.log to the beginning of your app.js - . Open the file in your browser and check the console to see the output.

console.log("Hello world!");

This is just to test and ensure your app.js is setup correctly before we continue.
Making a request

⛳️ Use the Fetch API to make a request to the JSON Placeholder API and log the response to the console.

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

getMyStuffFromOverThere();

    💭 Tip!

    In the dev tools, the Network tab shows details of your HTTP requests. You can click the request (listed by it’s URL) and see details of the request you made and the response returned from the API. It’s useful for confirming things are working as expected without having to console.log everything.

Handling the response

The return value from calling the Fetch API with await fetch is a Response object.

It has methods and properties to help us handle the response from the API request. The most important is the status code, accessed with response.status. This is a number between 100 and 511 that tells us if the request was successful or if not, what might have been wrong. Here are a few of the most important HTTP Status Codes we’re likely to encounter (don’t worry there are not 500 different ones, but there are quite a few!):
Successful 2xx:

    200: OK - The request was successful. My favourite!

Redirection 3xx:

    301: Moved Permanently - The requested resource has been moved to a new URL
    302: Found - The requested resource has been found at a new URL

Client Error 4xx:

    400: Bad Request - The request was malformed
    401: Unauthorized - The request was not authorised - the user is not logged in but is required to be for this request
    403: Forbidden - The request was forbidden - the user is logged in but does not have permission to make the request
    404: Not Found - The requested resource was not found
    418: I’m a teapot - This is a teapot, what are you even doing?

Server Error 5xx:

    500: Internal Server Error - The server encountered an error
    503: Service Unavailable - The service is unavailable for some reason (often because it’s been overloaded with requests by going viral or being DDoSd - which can be hard to tell apart!)

💭 You can see a full list of HTTP Status Codes here: HTTP Status Codes

    👀 Important

    It’s important to know that all coffee machines must adhere to the IETF’s Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0) and return a 418 status code when they are a teapot.

Parsing the response

When expecting JSON from an API, we can use the response.json() method to parse the response body as JSON. You might be asking yourself why it’s a ‘seperate’ step. Thats because you might want to parse the response body in a different format - like .blob() or .html(). For what we’re doing on the course, we’re going to stick to json(). Like in Local Storage, the JSON comes over the network as a string - the response.json() function turns it back into a JavaScript object we can access with object dot notation.
🎯 Mini Challenge: You’re a GitHub Star

You’re going to use the Github API to show some information about one of your repositories on a webpage.

    Make a fetch request to the Github API for one of your public repositories.
        The API endpoint “repos” can be called like this: https://api.github.com/repos/facebook/react
    Replace “facebook” with your own username, and “react” with the name of your repository.
    From the JSON object returned, access the stargazers_count and update your page to display the value by creating a DOM element and setting it’s content to that value.

💭 Help

    Remember to log that data you get back and search through the object to find the right property.
    More Github API details can be found in the docs: Github API Documentation
    You can use this approach to show your live Github repo or profile information on your portfolio page.

🏹 Stretch Goal

Make more than one fetch request to get data about other repos and add more information about each to the page.
