import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // ensure this is present so the server can understand JSON data
const PORT = 8080;

app.post("/messages", express.json(), (req, res) => {
    console.log("req.body", req.body);
    res.json({ status: "Message received!" });
});

app.listen(PORT, () => {
    console.info(`server is running in port: ${PORT}`);
});
