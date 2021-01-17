import Seccion from "../models/Seccion";
import { Request, Response } from 'express';
import Tema from "../models/Tema";

export async function getSecciones(req: Request, res: Response) {
    try {
        const secciones = await Seccion.findAll({
            attributes: { exclude: ['id_tema'] },
            include: [
                {
                    model: Tema,
                    as: 'tema'
                }
            ]
        });
        res.json({
            data: secciones
        });
    } catch (e) {
        console.log(e);
    }
}