
// ----------------------------- IMPORTS --------------------------------
import Slider from "../models/Slider";
import { Request, Response } from 'express';
import { HOST } from "../shared/var.constant";
import { getFechaHoraActual } from "../libs/date";

// -----------------------------------------------------------------------
//                            OBTENER SLIDERS
//                         (Para el admin-frontend)
// -----------------------------------------------------------------------
export async function getSliders(req: Request, res: Response) {
    try {
        const sliders = await Slider.findAll({
            order:[
                ['id_slider','DESC']
            ]
        });
        res.json({
            data: sliders
        });
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                       OBTENER SLIDERS VISIBLES
//                         (Para el uns-frontend)
// -----------------------------------------------------------------------
export async function getSlidersVisibles(req: Request, res: Response) {
    try {
        const sliders = await Slider.findAll({
            where:{
                visible: true
            },
            order:[
                ['id_slider','DESC']
            ]
        });
        res.json({
            data: sliders
        });
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                            CREAR SLIDER
// -----------------------------------------------------------------------
export async function createSlider(req: Request, res: Response) {
    
    try{
        let newSlider = await Slider.create({
            visible: true
        });

        if(req.file!=undefined){
            await newSlider.update({
                nombre_imagen:req.file.filename, 
                host_imagen:`${HOST}/${req.file.destination}`
             });
        }

        res.json({
            message: 'Creado satisfactorio',
            newSlider
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
//                            ACTUALIZAR SLIDER
// -----------------------------------------------------------------------
export async function updateSlider(req: Request, res: Response) {
   
    try {
        const { id_slider } = req.params;

        const slider = await Slider.findOne({
            attributes: ['id_slider','host_imagen', 'nombre_imagen','update_at'],
            where: { id_slider }
        });

        if(req.file!=undefined){
            await slider.update({
                nombre_imagen:req.file.filename, 
                host_imagen:`${HOST}/${req.file.destination}`
             });
        }

        const updatedSlider = await slider.update({
            update_at: getFechaHoraActual()
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedSlider
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
//                            ELIMINAR SLIDER
// -----------------------------------------------------------------------
export async function deleteSlider(req: Request, res: Response) {
    try {
        const { id_slider } = req.params;
        await Slider.destroy({
            where: {
                id_slider
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
//                           OBTENER UN SOLO SLIDER
// -----------------------------------------------------------------------
export async function getOneSlider(req: Request, res: Response) {
    try {
        const { id_slider } = req.params;
        const slider = await Slider.findOne({
            where: { id_slider }
        });
        res.json({slider});
    } catch (e) {
        console.log(e);
    }
}
// -----------------------------------------------------------------------
//                   ACTUALIZAR VISIBILIDAD DEL SLIDER
// -----------------------------------------------------------------------
export async function updateSliderVisible(req: Request, res: Response) {
    
    try {
        const { id_slider } = req.params;
        const { visible } = req.body;
        const slider = await Slider.findOne({
            attributes: ['id_slider', 'visible'],
            where: { id_slider }
        });

        const updatedSlider = await slider.update({
            visible
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedSlider
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}