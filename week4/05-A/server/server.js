import express from "express";
import cors from "cors";
import {db} from "./dbConn.js";
const app=express();
app.use(cors());
app.use(express.json());
const PORT=8080;
app.listen(PORT, ()=>{
    console.info(`server is running in port: ${PORT}`);
});

// app.get(()=>{});
// app.post(()=>{});
