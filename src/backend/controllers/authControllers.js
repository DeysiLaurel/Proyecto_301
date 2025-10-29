import { authServices } from "../services/authServices.js";

export const authControllers = {
    //Registro
    async register(req,res){
        try{
            const {email, name, password} = req.body;
            const result = await authServices.register({email, name, password});

            res.status(201).json({
                succes: true,
                message: "Usuario registrado exitosamente",
                data: result,
            });

        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            });

        }
    },
    //Login
     async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await authServices.login({ email, password });
            
            res.status(200).json({
                 succes: true,
                  message: "Inicio de sesión exitoso",
                   data: result,
            });
        } catch (error) {
            res.status(400).json({
                 succes: false,
                  message: error.message,
                 });               
        }
    },
};