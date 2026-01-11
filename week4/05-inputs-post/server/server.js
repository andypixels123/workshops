//imports
import express from "express";
//use cors to allow our client to send data (cross-origin)
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

//config cors
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

//TODO: READ a welcome message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server. GET comfy!" });
  //   res.send("<h1>Welcome to the server. GET comfy!</h1>");
});

//TODO: CREATE data using the form values from the client to send it to the database
app.post("/new-staff", (req, res) => {
  //receive the data from the client
  const newStaff = req.body.formValues;
  console.log(newStaff);
  //query the database to insert the data into the staff table
  //we use parameters in SQL to protect the data and to reuse the query
  const query = db.query(
    `INSERT INTO staff (name, location, age, bio) VALUES ($1, $2, $3, $4)`,
    [newStaff.staffname, newStaff.location, newStaff.age, newStaff.bio]
  );
  res.json({ status: "success", values: newStaff });
});