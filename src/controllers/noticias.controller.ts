import Noticia from "../models/Noticia";
import { Request, Response } from 'express';

export async function getNoticias(req: Request, res: Response) {
    try {
        const noticias = await Noticia.findAll();
        res.json({
            data: noticias
        });
    } catch (e) {
        console.log(e);
    }
}