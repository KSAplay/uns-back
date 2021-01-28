"use strict";
// import Usuario from "../models/Usuario";
// import { Request, Response } from 'express';
// import { HOST } from "../shared/var.constant";
// import { getFechaHoraActual } from "../libs/date";
// export async function estaAutenticado(req: Request, res: Response, next:NewableFunction) {
//     try {
//         const comunicados = await Usuario.findAll({
//             order:[
//                 ['fecha_comunicado','DESC']
//             ]
//         });
//         res.json({
//             data: comunicados
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }
// export async function estaAutorizado(req: Request, res: Response, next:NewableFunction) {
//     try {
//         const comunicados = await Comunicado.findAll({
//             where:{
//                 visible: true
//             },
//             order:[
//                 ['fecha_comunicado','DESC']
//             ]
//         });
//         res.json({
//             data: comunicados
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }
