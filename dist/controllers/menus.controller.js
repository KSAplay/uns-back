"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMenuPosicion = exports.updateMenuNombre = exports.deleteMenu = exports.updateMenuVisible = exports.getMenuOfParent = void 0;
const Menu_1 = __importDefault(require("../models/Menu"));
const database_1 = require("../config/database");
async function getMenuOfParent(req, res) {
    try {
        const { id_parent } = req.params;
        const menus = await Menu_1.default.findAll({
            where: {
                id_parent: id_parent == '0' ? null : id_parent
            },
            order: [
                ['orden', 'ASC']
            ],
            attributes: {
                include: [
                    [
                        database_1.sequelize.literal(`(SELECT count(*)
                      FROM menus as menu where menu.id_parent = menus.id_menu)`), 'numero_hijos'
                    ]
                ]
            }
        });
        res.json({
            data: menus
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getMenuOfParent = getMenuOfParent;
async function updateMenuVisible(req, res) {
    try {
        const { id_menu } = req.params;
        const { visible } = req.body;
        const menu = await Menu_1.default.findOne({
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
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }
}
exports.updateMenuVisible = updateMenuVisible;
async function deleteMenu(req, res) {
    try {
        const { id_menu } = req.params;
        await Menu_1.default.destroy({
            where: {
                id_menu
            }
        });
        res.json({
            message: 'Eliminado satisfactorio'
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.deleteMenu = deleteMenu;
async function updateMenuNombre(req, res) {
    try {
        const { id_menu } = req.params;
        const { nombre } = req.body;
        const menu = await Menu_1.default.findOne({
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
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }
}
exports.updateMenuNombre = updateMenuNombre;
async function updateMenuPosicion(req, res) {
    try {
        const { id_menu } = req.params;
        const { orden } = req.body;
        const menu = await Menu_1.default.findOne({
            attributes: ['id_menu', 'posicion'],
            where: { id_menu }
        });
        const updatedMenu = await menu.update({
            orden
        });
        res.json({
            message: 'Updated successfully',
            updatedMenu
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
exports.updateMenuPosicion = updateMenuPosicion;
