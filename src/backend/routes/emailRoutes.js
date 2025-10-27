import express from "express";
import { registerUser } from "../controllers/emailController.js";

const router = express.Router();

router.post("/register", registerUser);

/**
 * @swagger
 * /api/email/register:
 *   post:
 *     summary: Registrar usuario y enviar
 *     tags:
 *       - Email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@gmail.com
 *               name:
 *                 type: string
 *                 example: Juan Alimaña
 *     responses:
 *       200:
 *         description: Email enviado correctamente
 *       500:
 *         description: Error del servicio al enviar Email
 */

export default router;
