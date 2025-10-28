import express from "express";
import  {userControllers}  from "../controllers/userControllers.js";

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

// Obtener todos los usuarios
router.get("/", userControllers.getUsers);
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: Lista de usuarios obtenida correctamente
 */


// Crear nuevo usuario
router.post("/", userControllers.createUser);
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
 *        description: Datos inválidos
 *      500:
 *        description: Error del servidor
 */


// Actualizar usuario (PUT)
router.put("/:id", userControllers.updateUser);

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
 *                example: pamela@gmail.com
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
 *        description: Datos inválidos
 *      500:
 *        description: Error del servidor
 */


// Eliminar usuario (DELETE)
router.delete("/:id", userControllers.deleteUser);
/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Eliminar usuario por ID
 *    tags: [Users]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del usuario a eliminar
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Usuario eliminado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error del servidor
 */


// (Opcional) Actualización parcial (PATCH)
// router.patch("/:id", userControllers.patchUser);

export default router;
