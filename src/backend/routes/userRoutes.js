import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        email:
 *          type: string
 *          example: milagros@gmail.com
 *        name:
 *          type: string
 *          example: Milagros
 */

//Rutas para llamar al usuario
router.get("/", userController.getUsers);
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *       description: Ok
 * 
 */

router.post("/", userController.createUser);
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: milagros@gmail.com
 *              name:
 *                type: string
 *                example: Milagros
 *    responses:
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 */


router.put("/:id", userController.updateUser);
/**
 * @swagger
/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Actualizar usuario
 *    tags: [Users]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del usuario a actualizar
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: Pamela@gmail.com
 *              name:
 *                type: string
 *                example: Pamela
 *    responses:
 *      200:
 *        description: Usuario actualizado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 */





//Metodo para eliminar DELETE

//Metodo para modificar PATCH

export default router;