"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSeccionPosicion = exports.updateSeccionTema = exports.updateSeccionVisible = exports.getSeccionesOrden = exports.getSecciones = void 0;
const Seccion_1 = __importDefault(require("../models/Seccion"));
const Tema_1 = __importDefault(require("../models/Tema"));
async function getSecciones(req, res) {
    try {
        const secciones = await Seccion_1.default.findAll({
            attributes: { exclude: ['id_tema'] },
            include: [
                {
                    model: Tema_1.default,
                    as: 'tema'
                }
            ],
            order: [
                ['posicion', 'ASC']
            ]
        });
        res.json({
            data: secciones
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getSecciones = getSecciones;
async function getSeccionesOrden(req, res) {
    try {
        const secciones = await Seccion_1.default.findAll({
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
    }
    catch (e) {
        console.log(e);
    }
}
exports.getSeccionesOrden = getSeccionesOrden;
async function updateSeccionVisible(req, res) {
    try {
        const { id_seccion, visible } = req.body;
        const seccion = await Seccion_1.default.findOne({
            attributes: ['id_seccion', 'visible'],
            where: { id_seccion }
        });
        const updatedSeccion = await seccion.update({
            visible
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedSeccion
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
exports.updateSeccionVisible = updateSeccionVisible;
async function updateSeccionTema(req, res) {
    try {
        const { id_seccion, id_tema } = req.body;
        const seccion = await Seccion_1.default.findOne({
            attributes: ['id_seccion', 'id_tema'],
            where: { id_seccion }
        });
        const updatedSeccion = await seccion.update({
            id_tema
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedSeccion
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
exports.updateSeccionTema = updateSeccionTema;
async function updateSeccionPosicion(req, res) {
    try {
        const { id_seccion, posicion } = req.body;
        const seccion = await Seccion_1.default.findOne({
            attributes: ['id_seccion', 'posicion'],
            where: { id_seccion }
        });
        const updatedSeccion = await seccion.update({
            posicion
        });
        res.json({
            message: 'Updated successfully',
            updatedSeccion
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
exports.updateSeccionPosicion = updateSeccionPosicion;
