import Menu from "../models/Menu";
import { Request, Response } from 'express';
import { sequelize } from "../config/database";



export async function getMenuOfParent(req: Request, res: Response) {

    try {

        const { id_parent } = req.params;
      
        const menus = await Menu.findAll({
           
            where:{
                id_parent: id_parent=='0'? null : id_parent
            },
            order:[
                ['orden','ASC']
            ],
            attributes:{
                include: [
                    [
                      sequelize.literal(`(SELECT count(*)
                      FROM menus as menu where menu.id_parent = menus.id_menu)`),'numero_hijos'
                    ]
                ]
            }
            
        });
        res.json({
            data: menus
        });
    } catch (e) {
        console.log(e);
    }
}



export async function updateMenuVisible(req: Request, res: Response) {
    
    try {
        const { id_menu } = req.params;
        const { visible } = req.body;
        const menu = await Menu.findOne({
            attributes: ['id_menu', 'visible'],
            where: { id_menu }
        });

        const updatedMenu = await menu.update({
            visible
        });

        res.json({
            message: 'Actualizado satisfactorio',
            updatedMenu
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }   
}