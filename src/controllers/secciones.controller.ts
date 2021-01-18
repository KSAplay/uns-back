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


export async function getSeccionesOrden(req: Request, res: Response) {
    try {
        const secciones = await Seccion.findAll({
            attributes: ['frontend_id'],
            where: {
                visible: true
            },
            order: [
                ['posicion', 'ASC']
            ]
        });
        res.json({
            data: secciones
        });
    } catch (e) {
        console.log(e);
    }
}


export async function updateSeccionVisible(req: Request, res: Response) {

    const { id_seccion, visible } = req.body;
    try {
        const seccion = await Seccion.findOne({
            attributes: ['id_seccion', 'visible'],
            where: { id_seccion }
        });

        const updatedSeccion = await seccion.update({
            visible
        });

        res.json({
            message: 'Updated successfully',
            updatedSeccion
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function updateSeccionTema(req: Request, res: Response) {

    const { id_seccion, id_tema } = req.body;
    try {
        const seccion = await Seccion.findOne({
            attributes: ['id_seccion', 'id_tema'],
            where: { id_seccion }
        });

        const updatedSeccion = await seccion.update({
            id_tema
        });

        res.json({
            message: 'Updated successfully',
            updatedSeccion
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

}

export async function updateSeccionPosicion(req: Request, res: Response) {

    const { previa, actual } = req.body;

    try {
        const seccion = await Seccion.findOne({
            where: { posicion: previa }
        });
        
        const updatedSeccion = await seccion.update({
            posicion: actual
        });

        const secciones = await Seccion.findAll();

 
        res.json({
            message: 'Updated successfully',
            updatedSeccion
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

}