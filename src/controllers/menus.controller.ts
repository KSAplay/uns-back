import Menu from "../models/Menu";
import { Request, Response } from 'express';
const { Op } = require("sequelize");



export async function getMenuOfParent(req: Request, res: Response) {

    try {

        const { id_parent } = req.params;
      
        const menus = await Menu.findAll({
           
            where:{
                id_parent: id_parent=='0'? null : id_parent
            },
            order:[
                ['orden','ASC']
            ]
            
        });
        res.json({
            data: menus
        });
    } catch (e) {
        console.log(e);
    }
}

export async function isNodoFinal(req: Request, res: Response) {

    try {

        const { id_menu } = req.params;
        const conteo =await Menu.count({
            where: {
                id_parent: {
                    [Op.eq]: id_menu
                  }
            }
          });

        res.json({
            isNodoFinal: conteo == 0
        });
    } catch (e) {
        console.log(e);
    }
}