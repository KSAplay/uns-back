import Comunicado from "../models/Comunicado";
import { Request, Response } from 'express';

export async function getComunicados(req: Request, res: Response) {
    try {
        const comunicados = await Comunicado.findAll({
            order:[
                ['fecha_comunicado','DESC']
            ]
        });
        res.json({
            data: comunicados
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getComunicadosVisibles(req: Request, res: Response) {
    try {
        const comunicados = await Comunicado.findAll({
            where:{
                visible: true
            },
            order:[
                ['fecha_comunicado','DESC']
            ]
        });
        res.json({
            data: comunicados
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createComunicado(req: Request, res: Response) {
    
    try{
        const { fecha_comunicado, host_imagen, nombre_imagen } = req.body;
        let newComunicado = await Comunicado.create({
            fecha_comunicado, host_imagen, nombre_imagen
        },{
            fields: ['fecha_comunicado', 'host_imagen', 'nombre_imagen']
        });

        res.json({
            message: 'Creado satisfactorio',
            newComunicado
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }
}

export async function updateComunicado(req: Request, res: Response) {
   
    try {
        const { id_comunicado } = req.params;
        const { fecha_comunicado, host_imagen, nombre_imagen  } = req.body;
        const comunicado = await Comunicado.findOne({
            attributes: ['fecha_comunicado', 'host_imagen', 'nombre_imagen'],
            where: { id_comunicado }
        });

        const updatedComunicado = await comunicado.update({
            fecha_comunicado, host_imagen, nombre_imagen 
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedComunicado
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}

export async function deleteComunicado(req: Request, res: Response) {
    try {
        const { id_comunicado } = req.params;
        await Comunicado.destroy({
            where: {
                id_comunicado
            }
        });
        res.json({
            message: 'Eliminado satisfactorio'
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getOneComunicado(req: Request, res: Response) {
    try {
        const { id_comunicado } = req.params;
        const comunicado = await Comunicado.findOne({
            where: { id_comunicado }
        });
        res.json({comunicado});
    } catch (e) {
        console.log(e);
    }
}

export async function updateComunicadoVisible(req: Request, res: Response) {
    
    try {
        const { id_comunicado } = req.params;
        const { visible } = req.body;
        const comunicado = await Comunicado.findOne({
            attributes: ['id_comunicado', 'visible'],
            where: { id_comunicado }
        });

        const updatedComunicado = await comunicado.update({
            visible
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedComunicado
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}