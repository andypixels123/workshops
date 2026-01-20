
User Input Forms, POST Requests and API Servers
Overview

The most common interaction on a full stack web application is user generated content submissions like comments or a message in a visitor guestbook. We’ve been slowly learning all the pieces we need to be familiar with, and now we’re ready to start tying them together.

HTML Forms allow users to type in their message, the JavaScript ‘submit’ event listener lets us listen for the user clicking submit so we can grab what the user typed from the input field, and then the browser Fetch API can be called to send that data to our server.

Now we have our own server we can listen for that HTTP POST fetch request the client makes when the form is submitted and handle it with our Express POST route.
Class Plan

    Demo: Demonstration of HTML forms, submit event listener, and Fetch API passing data to our API server
    Workshop: Add a message form to send user input to our API route in the server, connecting client and server

Learning Objectives

    HTML Forms
    Submit event listener
    Fetch API
    POST requests
    Express API routes

Success Criteria

    I can implement an HTML form handled with an event in JS.
    I can set up a POST route in a server to manage the form data using the body object.
    I can test the POST route using Postman.
    I can connect the client with the server POST route using fetch, so the client can send the form data to the server.

Required Knowledge

    JavaScript
    HTML
    CSS
    Node.js
    Express

Resources

    MDN: HTML Forms
    MDN: Submit Event
    MDN: Fetch API
    Express: Routing

Workshop
HTML Forms

⛳️ Create a simple HTML form in your index.html file, with a single text input with the name of “message”, and a submit button.

<form id="messageForm">
  <input type="text" name="message" id="messageInput" />
  <button type="submit">Send</button>
</form>

Submit event listener

⛳️ Add a submit event listener to the form, and prevent the default behaviour of the form submitting the data to the server.

const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  // do something with the form data here
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

Fetch API

⛳️ Inside the submit event listener, use the Fetch API to send the data to the server.

const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:3000/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
}

Express API routes

⛳️ Create a new POST route in your Express server, and use the express.json() middleware to parse the JSON data from the request body.

// ... express setup goes here

app.use(express.json()); // ensure this is present so the server can understand JSON data

app.post("/messages", express.json(), (req, res) => {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});

// ... app.listen goes here

👀 Notice that when you type in your form and press send the browser makes a POST request containing your form data (check the Dev Tools “Network” tab to see the request happening)
