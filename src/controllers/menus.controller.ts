import Menu from "../models/Menu";
import { Request, Response } from 'express';
const { Op } = require("sequelize");



export async function getMenus(req: Request, res: Response) {
    try {
        const menus = await Menu.findAll({
            where:{
                id_parent: null
            },
            order:[
                ['orden','ASC']
            ],
            include: [
                {
                    model: Menu,
                    as: 'children',
                    include: [
                        {
                            model: Menu,
                            as: 'children'
                            
                        } 
                    ]
                } 
            ]
            
        });
        res.json({
            data: menus
        });
    } catch (e) {
        console.log(e);
    }
}