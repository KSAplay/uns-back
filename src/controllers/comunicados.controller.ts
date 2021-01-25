import Comunicado from "../models/Comunicado";
import { Request, Response } from 'express';
import { HOST } from "../shared/var.constant";
import { getFechaHoraActual } from "../libs/date";

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
        const { fecha_comunicado } = req.body;
        let newComunicado = await Comunicado.create({
            fecha_comunicado
        });

        if(req.file!=undefined){
            await newComunicado.update({
                nombre_imagen:req.file.filename, 
                host_imagen:`${HOST}/${req.file.destination}`
             });
        }

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
        const { fecha_comunicado } = req.body;

        const comunicado = await Comunicado.findOne({
            attributes: ['id_comunicado','fecha_comunicado', 'host_imagen', 'nombre_imagen','update_at'],
            where: { id_comunicado }
        });

        if(req.file!=undefined){
            await comunicado.update({
                nombre_imagen:req.file.filename, 
                host_imagen:`${HOST}/${req.file.destination}`
             });
        }

        const updatedComunicado = await comunicado.update({
            fecha_comunicado, update_at: getFechaHoraActual()
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