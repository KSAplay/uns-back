import Menu from "../models/Menu";
import { Request, Response } from 'express';
import { sequelize } from "../config/database";


export async function getMenus(req: Request, res: Response) {
    try {
        const menus = await Menu.findAll({
            attributes: { exclude: ['id_menu','create_at','update_at','visible','id_parent'] },
            include: [
                {
                    model: Menu,
                    attributes: { exclude: ['id_menu','create_at','update_at','visible','id_parent'] },
                    as: 'children',
                     where: {
                        visible: true
                    },
                    include: [
                        {
                            model: Menu,
                            attributes: { exclude: ['id_menu','create_at','update_at','visible','id_parent'] },
                            as: 'children',
                            where: {
                                visible: true
                            }
                        }
                    ]
                }
            ],
            order:[
                [ 'orden','ASC'],
                [
                    {model: Menu, as: 'children' },
                    'orden','ASC'
                ],
                [
                    {model: Menu, as: 'children' },
                    {model: Menu, as: 'children'},
                    'orden','ASC'
                ]

            ],
            where: {
                id_parent: null,
                visible: true
            }
        });
        res.json({
            data: menus
        });
    } catch (e) {
        console.log(e);
    }
}

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

export async function deleteMenu(req: Request, res: Response) {
    try {
        const { id_menu } = req.params;
        await Menu.destroy({
            where: {
                id_menu
            }
        });
        res.json({
            message: 'Eliminado satisfactorio'
        });
    } catch (e) {
        console.log(e);
    }
}


export async function updateMenuNombre(req: Request, res: Response) {
    
    try {
        const { id_menu } = req.params;
        const { nombre } = req.body;
        const menu = await Menu.findOne({
            attributes: ['id_menu', 'nombre'],
            where: { id_menu }
        });

        const updatedMenu = await menu.update({
            nombre
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


export async function updateMenuPosicion(req: Request, res: Response) {

    try {
        const { id_menu } = req.params;
        const { orden } = req.body;

        const menu = await Menu.findOne({
            attributes: ['id_menu', 'orden'],
            where: { id_menu }
        });
        
        const updatedMenu = await menu.update({
            orden
        });

        res.json({
            message: 'Updated successfully',
            updatedMenu
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

}
