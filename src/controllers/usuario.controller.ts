import Usuario from "../models/Usuario";
import { NextFunction, Request, Response } from 'express';
import { CodificarPassword, ComparePassword } from '../Helpers/encriptar.helper';


export async function iniciarSession(req: Request, res: Response, next:NextFunction) {
    try {
        const { email, password } = req.body;
       
        const usuario = await Usuario.findOne({ where: { email }});
        
        if(usuario===null) throw {message: `Usuario no registrado`}  
     
        
        const result = await ComparePassword(usuario.dataValues.password, password)
        
         if (result === false)
                throw { message: "email y/o password son inválidas" };
            delete usuario.dataValues.password;
            res.json(usuario.dataValues);
           
        

       

       
    } catch (e) {        
        res.status(500).send(e)
       
    }
}



export async function registrarUsuario(req: Request, res: Response, next:NextFunction) {
    try {
        const { nombres, apellidos, email, password } = req.body;
        const usuario = await Usuario.findOne({ where: { email }});
        if(usuario) throw "Existe una cuenta registrada con este email"
        CodificarPassword(password, async (error:any, password: String) => {
            if(error) throw "Hubo un error mientras se registraba, intentar mas tarde"
            let nuevoUsuario = Usuario.create({
                nombres, apellidos, email, password
            });
            delete nuevoUsuario.password
            res.json(nuevoUsuario);
        })
    } catch (e) {
        res.status(500).send(e)
    }
}
