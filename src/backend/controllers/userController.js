import { userService } from '../services/userServices.js';

export const userController = {
  async getUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  async createUser(req, res) {
    try {
      const { email, name } = req.body;
      // Validación básica
      if (!email || !name) {
        return res.status(400).json({
          success: false,
          message: 'Email y nombre son obligatorios'
        });
      }

      const newUser = await userService.createUser({ email, name });
      res.status(201).json({
        success: true,
        data: newUser,
        message: 'Usuario creado correctamente'
      });
    } catch (error) {
      // Manejar error de email duplicado
      if (error.message.includes('email ya está en uso')) {
        return res.status(409).json({
          success: false,
          message: error.message
        });
      }
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedUser = await userService.updateUser(id, updateData);

      res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'Usuario actualizado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },
  async deleteUser (req, res) {
    try {
      const { id } = req.params;
      const deleteUserResult = await userService.deleteUser(id);

      res.status(200).json({
        success: true,
        message: 'Usuario eliminado correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}