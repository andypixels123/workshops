
Build an API Server with Node.js and Express
Overview

So far, we have created apps which are in charge of performing different tasks: interacting with the user, responding to that user interaction, rendering elements in the DOM, and storing data in local storage, among others. As our apps become more complex, we will not be able to perform all these tasks efficiently with just a client. We need more power! This is where servers come into play. Essentially, servers are the engines of our app. They will be in charge of performing the most complex tasks in our app, which will involve manipulating data in different ways: creating data, reading data, updating data, and deleting data. Each of these tasks will be divided into different “compartments” inside our server to keep them organised and efficient. These “compartments” are called routes. Routes are a little like postboxes – you can retrieve and send data to them, and the address remains consistent. We will be able to set a specific address (endpoint) for each route, and declare what task the route is performing using an HTTP method.
Class Plan

    Demo: Demonstration of Node.js and Express API routes, and querying with Postman/HTTPie
    Workshop: Make your own API server with Node.js and Express

Learning Objectives

    Handling data input and output with Express HTTP routes
    Handling a GET request to return data
    Handling a POST request to receive data and return a response
    HTTP Codes

Success Criteria

    I can give examples of the benefits of having a server.
    I can set up a basic API in the server with Express.
    I can implement a GET route to read data and test it with Postman.
    I can implement a POST route to create data and test it with Postman.

Required Knowledge

    JavaScript
    Node.js
    Express, as installed by NPM

Resources

    Express: Routing
    Express: req.params
    Express: req.query
    Express: req.body

Workshop
Creating a route to handle a GET request

The most fundamental “HTTP Verb” is the GET request. This is the same type of request as your web browser uses when it loads a web page.

Loading a web page, the GET request includes a “HTTP Header” called “Accept” that tells the server which type of data the browser can accept. If you load google.com with the Network tab open, and browse to the “Request headers” at the bottom of the Headers tab, you should see the Accept header, including the value “text/html”. This tells the server we’re expecting HTML, which makes sense because we’re loading a web page in a web browser!

In the “Response headers” you’ll see a “Content-Type” header, which probably contains “text/html”, just as we asked.

When we make a GET request to an API, we’re usually expecting JSON data in response. We can make sure the server knows this by setting the header to 'Accept': 'application/json'. Most likely the server will be sending JSON back anyway, and it’ll tell us this by setting this same value in the ‘Content-Type’ header of the response.

⛳️ Initialise a new Express server

npm init -y
npm install express

You will need to add a line to your package.json file so that we can use import statements:

  "type": "module",

⛳️ Create a new file called server.js and add the following code to import the express library and execute it, creating a new express application called app:

import express from "express";

const app = express();

// your routes will go here...

app.listen(3000, function () {
  console.log("Server is listening on port 3000...");
});

⛳️ Add the following code to the server.js file to set up the GET route at localhost:3000/messages :

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});

💭 This code creates a route on our server that will handle GET requests to the /messages URL. When a request is received, the callback function will be called, and we’ll send a JSON response back to the client.

⛳️ Run the server (be sure to restart, or use nodemon) and use Postman or HTTPie to query the API. Use node server.js. Open postman and make a get request to localhost:3000/messages.

🎯 Return a bigger object, an array or an array of objects and observe the response and how it presents in your HTTP client
Creating a route to handle a POST request

The other mission critical HTTP verb is the POST request. This is the type of request your browser makes when it submits a form. It’s also how we’ll send data to our API. The 'Content-Type': 'application/json' header comes in pretty handy. We’ll need to tell the server we’re using JSON, and not the default of application/x-www-form-urlencoded, which is what the browser uses to submit forms!

⛳️ Add the following code to the server.js file to set up the POST route at localhost:3000/messages :

app.post("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});

⛳️ Because we’re going to send JSON, we’ll also need to help express understand the JSON request body. We can do this by passing the json method on the express object to the use method on our app object. This is a middleware function that interprets the JSON for us and makes it available to the route handler as the req.body.

app.use(express.json());

👀 Notice how we can set up GET and POST routes on the same URL endpoint. This is because the HTTP verb is used as part of identifying the request. Every HTTP request type can be dealt with separately, on the same URL. This is because we often want to GET posts, POST a post, or even DELETE a post. It makes sense to do them against the same URL that represents the entity we’re creating, reading, updating, or deleting.

⛳️ Run the server (be sure to restart, or use nodemon) and use Postman or HTTPie to query the API - be sure to set your client to send a POST request.

🎯 Send a message JSON object from your HTTP client, and make the POST route return the same message in the response! You can either send the whole request, or modify the request and send back a different response incorporating the request data.
