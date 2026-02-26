import pg from "pg";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
dotenv.config();

// ! npm run start
// ! test using - http://localhost:8080
// ! test using - http://localhost:8080/messages

const db = new pg.Pool({
    connectionString: process.env.DB_CONN_STRING,
});

// app.get("/messages", async function (request, response) {
//     const messages = await db.query("SELECT * FROM messages");
//     response.json(messages.rows);
//     console.log(messages.rows);
// });

app.get("/messages", async function (request, response) {
    const messages = await db.query("SELECT * FROM messages WHERE id = 1");
    response.json(messages.rows);
    console.log(messages.rows);
});

app.listen(PORT, () => {
    console.info(`Server running, port ${PORT}`);
});