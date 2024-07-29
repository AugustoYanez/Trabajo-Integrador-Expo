import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import { db } from "./database";
import multer from "multer";
import path from "path";
const cors = require('cors')

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads'))); // Servir archivos estáticos
app.use(upload.single('imagen')); // Añadir middleware para manejar la subida de imágenes

// Conectar a la base de datos
db();

// Rutas
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
