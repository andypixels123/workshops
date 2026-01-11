// CRUD: create, read, update, delete
// Express.js (or simply Express) is the most popular Node.js web application framework, designed for building web applications and APIs. It's often called the de facto standard server framework for Node.js.

// import express from my node_modules
import express from "express";

// instantiate our express app
const app = express();

// allow our server to recieve information in the request
app.use(express.json());



app.listen(3000, function () {
    console.log("Server is listening on port 3000...");
});

app.get("/messages", function (request, response) { // get = read
    // endpoint '/' could be '/dirname'
    response.json({ message: "Hello, World!" });
});

// app.post("/messages", function (request, response) { // post = create
//   response.json({ message: "Hello, You!" });
// });


// 🎯 Send a message JSON object from your HTTP client (Thunder Client or PostMan), and make the POST route return the same message in the response! You can either send the whole request, or modify the request and send back a different response incorporating the request data.

// sample object for app.post below
// use as JSON text in Thunder Client 'POST'
// {
//   "a": 4,
//   "b": 6
// }

// POST endpoint, that recieves data from the client
app.post("/add", function (request, response) {
    const numA = request.body.a;
    const numB = request.body.b;
    response.send(`${numA} + ${numB} = ${numA + numB}`);
});

