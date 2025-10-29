import { sendEmail } from "../services/emailServices.js";

export const registerUser = async (req, res) => {
  const { email, name } = req.body;
  try {
    await sendEmail(
      email,
      "Bienvenido",
      `Hola ${name}, bienvenido a nuestra app`
    );
    res.status(201).json({ message: "Usuario creado, email enviado" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
};
