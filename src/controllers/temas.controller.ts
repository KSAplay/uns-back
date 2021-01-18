import Tema from "../models/Tema";
import { Request, Response } from 'express';
import Seccion from "../models/Seccion";

export async function getTemas(req: Request, res: Response) {
    try {
        const temas = await Tema.findAll();
        res.json({
            data: temas
        });
    } catch (e) {
        console.log(e);
    }
}


export async function getTemaBySeccionFrontendID(req: Request, res: Response) {
    try {
        const { frontend_id } = req.params;
        const seccion = await Seccion.findOne({
            attributes: [ 'id_tema'],
            where: { frontend_id }
        });
        const tema = await Tema.findOne({
            attributes: { exclude: ['id_tema'] },
            where: { id_tema: seccion.id_tema}
        });

        res.json({
            data: tema
        });
    } catch (e) {
        console.log(e);
    }
}

