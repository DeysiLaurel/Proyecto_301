import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Hashear contraseña
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // Nivel de encriptación
  return await bcrypt.hash(password, salt);
};

// Comparar contraseñas
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generar token JWT
export const generateToken = (userId, email) => {
  return jwt.sign(
    { id: userId, email },
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" } 
  );
};

// Verificar token JWT
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET); 
  } catch (error) {
    return null;
  }
};
