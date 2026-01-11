//import express
import express from "express";

//initialise express
const app = express();

//tell express that we want to use JSON to manipulate data
app.use(express.json());

//set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`Server is running in localhost:${PORT}`);
});

//TODO: set up a root route to READ a welcome message
// route --> "/"

app.get("/", function (request, response) {
  response.json({ message: "Welcome to the root route. GET comfy!" });
});

//========================ROUTES=====================================

import { db } from "./dbConn.js";

//TODO: I want to READ the data in the staff table
// route --> "/staff"
// HTTP method --> get
app.get("/staff", async function (request, response) {
  //query the database
  const query = await db.query(`SELECT name, location, age, bio FROM staff;`);
  console.log(query);
  //parse the response into JSON and wrangle it to show just the rows property
  response.json(query.rows);
});

//TODO: I want to READ the name and location of all staff
// route --> "staff-location"
// HTTP method --> get
app.get("/staff", async function (request, response) {
  const query = await db.query(`SELECT name, location FROM staff;`);
  console.log(query);
  response.json(query.rows);
});

// Todo: get names only from staff table
app.get("/staff-2", async function (request, response) {
  //query the database
  const query = await db.query(`SELECT name FROM staff;`);
  // console.log(query);
  // parse the response into JSON and wrangle it to show just the rows property
  response.json(query.rows);
});