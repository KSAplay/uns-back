import Menu from "../models/Menu";
import { Request, Response } from 'express';



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