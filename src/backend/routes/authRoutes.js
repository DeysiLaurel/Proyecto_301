import express from "express";
import { authControllers } from "../controllers/authControllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: margarita@gmail.com
 *               name: 
 *                 type: string
 *                 example: Margarita
 *               password:
 *                 type: string
 *                 example: patito1234
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos enviados incorrectamente
 *       500:
 *         description: Error interno del servidor
 */
router.post("/register",authControllers.register)
export default router;
