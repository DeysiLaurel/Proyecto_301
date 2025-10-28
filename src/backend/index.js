import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta base de prueba
app.get("/", (req, res) => {
  res.json({
    message: "API corriendo correctamente 🚀",
  });
});

// Rutas del proyecto
app.use("/api/users", userRoutes);
app.use("/api/email", emailRoutes); // <-- Cambiado a /api/email para no chocar con /api/auth
app.use("/api/auth", authRoutes);

// Servidor en marcha
app.listen(PORT, () => {
  console.log(` Servidor corriendo y escuchando en el puerto ${PORT}`);
});
