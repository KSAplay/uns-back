
// ----------------------------- IMPORTS --------------------------------
import Vinculo from "../models/Vinculo";
import { Request, Response } from 'express';
import { HOST } from "../shared/var.constant";
import { getFechaHoraActual } from "../libs/date";
// ----------------------------------------------------------------------

// -----------------------------------------------------------------------
//                            OBTENER VÍNCULOS
//                         (Para el admin-frontend)
// -----------------------------------------------------------------------
export async function getVinculos(req: Request, res: Response) {
    try {
        const vinculos = await Vinculo.findAll({
            order:[
                ['id_vinculo','DESC']
            ]
        });
        res.json({
            data: vinculos
        });
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                       OBTENER VÍNCULOS VISIBLES
//                         (Para el uns-frontend)
// -----------------------------------------------------------------------
export async function getVinculosVisibles(req: Request, res: Response) {
    try {
        const vinculos = await Vinculo.findAll({
            where:{
                visible: true
            },
            order:[
                ['id_vinculo','DESC']
            ]
        });
        res.json({
            data: vinculos
        });
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                            CREAR VÍNCULO
// -----------------------------------------------------------------------
export async function createVinculo(req: Request, res: Response) {
    
    try{
        let newVinculo = await Vinculo.create({
            visible: true
        });

        if(req.file!=undefined){
            await newVinculo.update({
                nombre_imagen:req.file.filename, 
                host_imagen:`${HOST}/${req.file.destination}`
             });
        }

        res.json({
            message: 'Creado satisfactorio',
            newVinculo
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }
}
// -----------------------------------------------------------------------
//                            ACTUALIZAR VÍNCULO
// -----------------------------------------------------------------------
export async function updateVinculo(req: Request, res: Response) {
   
    try {
        const { id_vinculo } = req.params;

        const vinculo = await Vinculo.findOne({
            attributes: ['id_vinculo','host_imagen', 'nombre_imagen','update_at'],
            where: { id_vinculo }
        });

        if(req.file!=undefined){
            await vinculo.update({
                nombre_imagen:req.file.filename, 
                host_imagen:`${HOST}/${req.file.destination}`
             });
        }

        const updatedVinculo = await vinculo.update({
            update_at: getFechaHoraActual()
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedVinculo
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}
// -----------------------------------------------------------------------
//                            ELIMINAR VÍNCULO
// -----------------------------------------------------------------------
export async function deleteVinculo(req: Request, res: Response) {
    try {
        const { id_vinculo } = req.params;
        await Vinculo.destroy({
            where: {
                id_vinculo
            }
        });
        res.json({
            message: 'Eliminado satisfactorio'
        });
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                           OBTENER UN SOLO VINCULO
// -----------------------------------------------------------------------
export async function getOneVinculo(req: Request, res: Response) {
    try {
        const { id_vinculo } = req.params;
        const vinculo = await Vinculo.findOne({
            where: { id_vinculo }
        });
        res.json({vinculo});
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                   ACTUALIZAR VISIBILIDAD DEL VINCULO
// -----------------------------------------------------------------------
export async function updateVinculoVisible(req: Request, res: Response) {
    
    try {
        const { id_vinculo } = req.params;
        const { visible } = req.body;
        const vinculo = await Vinculo.findOne({
            attributes: ['id_vinculo', 'visible'],
            where: { id_vinculo }
        });

        const updatedVinculo = await vinculo.update({
            visible
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedVinculo
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}