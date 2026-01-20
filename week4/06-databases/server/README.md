
Databases: Schema, Tables, and SQL
Overview

At a basic level, relational databases are very similar to spreadsheets. They’re a tool for storing data in a way that can be easily queried and manipulated.

Relational databases are named because of their ability to represent relationships between different types of data and enable queries to combine it in useful ways. Think showing all players on sports teams, thread replies on social media, comments on a particular blog post.

A relational database is made up of a set of “tables” (like sheets) representing the different types of data in an application (teams, players, users, comment messages, etc.).

Each table has a set of columns representing the different properties on an object.

Each row in the table represents a single unique object and it’s properties.

A fancy spreadsheet.

Standard Query Language (SQL) is a text language to query and manipulate data in a database. It’s a widely used standard across structured databases, including SQLite, MySQL and PostgreSQL. While there are some differences, the basics are the same across all of these databases.

There are other types of databases (noSQL, graph, key/value, etc.), which are more specialised than relational databases. are the most widely used, general purpose database solutions.

Side note:- You’ll often see SQL statements written in all caps for the SQL things and lowercase for user controlled things - like the names of your tables. This is by convention, but not required.
Some terminology:

Database -> A structured collection of data, often stored electronically. A database typically contains one or more tables and the data stored within them.

Table -> Data organized in vertical columns (which are identified by their name) and horizontal rows. Like a spreadsheet!

Query -> What we call the current operation we’re doing on our database. Not restricted to asking for data, but also deleting it, updating it, inserting it.

Record -> Think of this as a row in the table.

Constraint -> A rule applied to a column or a set of columns in a SQL table that limits the type of data that can be stored in a column; this ensures the accuracy and reliability of the data within the table.
Class Plan

    Demo: Demonstration of a database in Supabase
    Workshop: Create a database, create a table, insert data, and query it with SQL

Learning Objectives

    What is a database?
    What is SQL?
    How to create a database
    How to create a table
    How to insert data
    How to query data

Success Criteria

    I can create a database in Supabase.
    I can connect a database with a server using a connection string and environment variables.
    I can create tables in a database using a SQL query with a SQL editor or a seed file.
    I can insert new data in a table using a SQL query with a SQL editor or a seed file.
    I can configure GET and POST API routes in the server to interact with a table in a database using SQL queries.

Resources

    SQL Tutorial
    SQL Cheat Sheet

Workshop

Setting up a mono repo with a client and a server

In a new folder, create a new Vite project called client. Change the directory back into the folder you created at first, and create a server folder. Inside there, we will have a server.js file, and later on, we will add a seed.js file.

For this lesson, we will focus on the server.
Signing up for Supabase

Once you’re all signed up, create a new project on Supabase. Choose your own organisation, give the project a suitable name (keep in mind you may want to use one database across multiple projects - databases can have multiple tables, after all).

Once you have your project made, go to the lefthand menu to the SQL Editor - this is a nice section we can use to write SQL queries directly.

We’ll create a table.

To create a table, we write the command ‘create table’ followed by the table name. Inside the parenthesis, we describe the column name followed by it’s data type.

CREATE TABLE messages (
    column_name BOOLEAN
)

So from the above we’d have a column in our database named ‘column_name’ that accepts boolean values (true/false). If you attempted to insert the wrong type of data, your sql query would error.

But that column isn’t too useful.

Let’s write something like this:

CREATE TABLE messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    msg_name TEXT,
    content TEXT
)

TEXT is for a string of characters (a string!)

But what’s all this stuff after id?

INT means its a number (short for integer)

PRIMARY KEY means its the main identifier for each entry in this table

GENERATED ALWAYS AS IDENTITY means that will go up by one each time a new record (entry) is inserted into the table automatically

💭 The SQL editor is super useful, and you could use it to the rest of the workshop. We’re going to look at a different method, but if you want to play around with SQL to get used to it, use this!
Inserting data into a database

We’ll be using a package called pg to query our supabase DB.

⛳️ In the folder you created earlier, cd into the server:

cd server

npm init -y

⛳️ Install the pg package and the dotenv.

npm install pg dotenv

⛳️ Create a new file called seed.js and open it in your code editor.

💭 A “seed file” is a simple Node.js script that we can run to create our database from scratch, with the tables and fields we need, plus optionally some test data. It’s useful to be able to easily delete and rebuild the database from scratch while developing and testing.

We then need to import pg and dotenv just like we’ve done with express in the past.

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

⛳️ We’re going to connect to our database by initialising a ‘db’ object (you can name this whatever you want) that will provide methods for us to query our db.

.Pool() accepts a configuration object - we’re going to take the simple route and provide a connection string:

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

⛳️ Create a .env file in your server folder and add the following to it:

DB_CONN_STRING=UYourConnectionStringFromSupabase

To find your connection string, go to the home button and click on the ‘connect’ button in the nav bar. Choose the ‘Transaction pooler’ version of the string - you want to make sure whatever you choose is IPV4 compatible.

To insert data into a database, we make an ‘INSERT’ statement. Remember that databases can have multiple tables, so we need to clarify which table we’re inserting into, and then also which columns of that table, and finally the values we want to insert.

(You can do multiple table inserts, but lets keep it simple!)

To run a query with the pg package, we can use the db object we instantiated earlier ->

db.query(
  `INSERT INTO messages (msg_name, content) VALUES ('hello there','general kenobi')`
);

Take note of the parenthesis where we specify the column names and values.

Run the file with node js by typing this in the terminal - node seed.js

Give your supabase a refresh and you should see the values inserted!

(Having trouble? Make sure your terminal is in the same folder your seed.js file is)
Parameter Placeholders

So we saw that the insert statement worked, but there are some security risks to be aware of.

Imagine you’re using a website and you want to look at your user information. To display that to you, the developer of the website does something like this -

SELECT * FROM users WHERE id = ${req.body.user_id}

So if my user id was xleethaxor_x the req.body.user_id would make the statement actually read like this:

SELECT * FROM users WHERE id = xleethazor_x

Great right?

But what if I was a malicious user, and managed to intercept the request body - when the server gets it, it treats it like anything else - except instead of providing a user_id, what I’ve actually provided is another sql statement.

SELECT * FROM users WHERE id = '' OR '1'='1'

Just like the boolean rules we learned right at the beginning of the course, this would mean it would select all users if the id was nothing OR if 1 was equal to 1.

SQL queries evaluate the condition in the WHERE clause for each row in the table. Since ‘1’ = ‘1’ true (duh!), the condition is met for every single row, and thus all rows are returned. We don’t want that!

We can avoid it using parameter placeholders.

What these do is ensure that any data passed to a sql query will only ever be treated as a value and will never be processed as a sql query.

To use these in the pg package, we do this:

db.query(`SELECT * FROM USERS WHERE id = $1`, [req.body.user_id]);

Instead of writing the value directly, we create a placeholder with a dollar sign and 1, and then put the actual value in an array as a second parameter to the query method.

We can also do multiple queries like this:

db.query(`SELECT * FROM USERS WHERE id = $1 AND email = $2`, [
  req.body.user_id,
  req.body.user_email,
]);

Inserting more data:

If we want to insert multiple things at once, we’ll just have to run multiple insert statements.

⛳️ In your seed.js file, insert a few more messages, using the placeholder parameters we just learned about, and then run node seed.js

Here’s an example -

db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "Does anyone else..",
  "love oranges",
]);
db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "hot take: ",
  "I think oranges suck",
]);




----------------------- BOOKMARK CONTINUE FROM BELOW --------------------------------

Querying a database from an Express endpoint

To query the database using async/await, follow these steps:

⛳️ Ensure you have your database connection set up in your server.js file (as well as the usual Express set up code):

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

⛳️ Create an async function as the callback on our GET endpoint to perform the query:

app.get("/messages", async function (request, response) {
  const messages = await db.query("SELECT * FROM messages");
  response.json(messages.rows);
});

This will log the contents of the messages table to the console, handling the database query in an asynchronous manner.

Additional Queries You can modify the queryDatabase function to perform different types of queries. Here are a few examples:
Filtering Results

app.get("/messages", async function (request, response) {
  const messages = await db.query("SELECT * FROM messages WHERE id = 1");
  response.json(messages.rows);
});

Connecting the Database to the requests

Let’s create a client that makes a fetch request to your server, and get information from your database on your client… magic?

🎯 Create a new database for storing some data sent to your API - it can be any data you like, but keep it reasonably simple to start. Create a seed.js file that instantiates the database and populates it with some test data.

🎯 Connect to your database in your API server with pg as above, and run a SELECT query in your get route. Return the data that comes back in the API response.

🎯 Create a POST route to insert the data from the request into the database, and return the data that was inserted in the response, just confirm that it was inserted.
