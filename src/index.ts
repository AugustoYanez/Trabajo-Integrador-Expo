import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import { db } from "./database";

const app = express();

app.use(express.json());

db()
app.use('/', router);
app.listen(3000, () => {
    console.log("server runing on port 3000");
})