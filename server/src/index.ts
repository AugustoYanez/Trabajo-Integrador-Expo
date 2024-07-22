import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import { db } from "./database";
import { Documento } from "./interfaces/enums";
const cors = require('cors');


const app = express();


dotenv.config()
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
dotenv.config()

db()
app.use('/', router);
console.log(Object.values(Documento));
app.listen(PORT, () => {
    console.log(`SERIDOR ACTIVO EN EL PUERTO ${PORT}`);
})