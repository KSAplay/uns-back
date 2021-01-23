import Noticia from "../models/Noticia";
import { Request, Response } from 'express';

export async function getNoticias(req: Request, res: Response) {
    try {
        const noticias = await Noticia.findAll({
            order:[
                ['fecha_noticia','DESC']
            ]
        });
        res.json({
            data: noticias
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getNoticiasVisibles(req: Request, res: Response) {
    try {
        const noticias = await Noticia.findAll({
            where:{
                visible: true
            },
            order:[
                ['fecha_noticia','DESC']
            ]
        });
        res.json({
            data: noticias
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createNoticia(req: Request, res: Response) {
    
    try{
        const { titular, fecha_noticia, visible, host_imagen, nombre_imagen } = req.body;
        let newNoticia = await Noticia.create({
            titular,fecha_noticia, visible, host_imagen, nombre_imagen
        },{
            fields: ['titular','fecha_noticia', 'visible', 'host_imagen', 'nombre_imagen']
        });

        res.json({
            message: 'Creado satisfactorio',
            data: newNoticia
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }
}

export async function updateNoticia(req: Request, res: Response) {
   
    try {
        const { id_noticia } = req.params;
        const { titular, fecha_noticia, host_imagen, nombre_imagen } = req.body;
        const noticia = await Noticia.findOne({
            attributes: ['titular','fecha_noticia', 'host_imagen', 'nombre_imagen'],
            where: { id_noticia }
        });

        const updatedNoticia = await noticia.update({
            titular, fecha_noticia, host_imagen, nombre_imagen 
        });

        res.json({
            message: 'Actualizado satisfactorio',
            data: updatedNoticia
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}

export async function deleteNoticia(req: Request, res: Response) {
    try {
        const { id_noticia } = req.params;
        await Noticia.destroy({
            where: {
                id_noticia
            }
        });
        res.json({
            message: 'Eliminado satisfactorio'
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getOneNoticia(req: Request, res: Response) {
    try {
        const { id_noticia } = req.params;
        const noticia = await Noticia.findOne({
            where: { id_noticia }
        });
        res.json({noticia});
    } catch (e) {
        console.log(e);
    }
}

export async function updateNoticiaVisible(req: Request, res: Response) {
    
    try {
        const { id_noticia } = req.params;
        const { visible } = req.body;
        const noticia = await Noticia.findOne({
            attributes: ['id_noticia', 'visible'],
            where: { id_noticia }
        });

        const updatedNoticia = await noticia.update({
            visible
        });

        res.json({
            message: 'Actualizado satisfactorio',
            data: updatedNoticia
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}