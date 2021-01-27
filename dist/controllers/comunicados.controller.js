"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComunicadoVisible = exports.getOneComunicado = exports.deleteComunicado = exports.updateComunicado = exports.createComunicado = exports.getComunicadosVisibles = exports.getComunicados = void 0;
const Comunicado_1 = __importDefault(require("../models/Comunicado"));
const var_constant_1 = require("../shared/var.constant");
const date_1 = require("../libs/date");
async function getComunicados(req, res) {
    try {
        const comunicados = await Comunicado_1.default.findAll({
            order: [
                ['fecha_comunicado', 'DESC']
            ]
        });
        res.json({
            data: comunicados
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getComunicados = getComunicados;
async function getComunicadosVisibles(req, res) {
    try {
        const comunicados = await Comunicado_1.default.findAll({
            where: {
                visible: true
            },
            order: [
                ['fecha_comunicado', 'DESC']
            ]
        });
        res.json({
            data: comunicados
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getComunicadosVisibles = getComunicadosVisibles;
async function createComunicado(req, res) {
    try {
        const { fecha_comunicado } = req.body;
        let newComunicado = await Comunicado_1.default.create({
            fecha_comunicado, visible: true
        });
        if (req.file != undefined) {
            await newComunicado.update({
                nombre_imagen: req.file.filename,
                host_imagen: `${var_constant_1.HOST}/${req.file.destination}`
            });
        }
        res.json({
            message: 'Creado satisfactorio',
            newComunicado
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
exports.createComunicado = createComunicado;
async function updateComunicado(req, res) {
    try {
        const { id_comunicado } = req.params;
        const { fecha_comunicado } = req.body;
        const comunicado = await Comunicado_1.default.findOne({
            attributes: ['id_comunicado', 'fecha_comunicado', 'host_imagen', 'nombre_imagen', 'update_at'],
            where: { id_comunicado }
        });
        if (req.file != undefined) {
            await comunicado.update({
                nombre_imagen: req.file.filename,
                host_imagen: `${var_constant_1.HOST}/${req.file.destination}`
            });
        }
        const updatedComunicado = await comunicado.update({
            fecha_comunicado, update_at: date_1.getFechaHoraActual()
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedComunicado
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
exports.updateComunicado = updateComunicado;
async function deleteComunicado(req, res) {
    try {
        const { id_comunicado } = req.params;
        await Comunicado_1.default.destroy({
            where: {
                id_comunicado
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
exports.deleteComunicado = deleteComunicado;
async function getOneComunicado(req, res) {
    try {
        const { id_comunicado } = req.params;
        const comunicado = await Comunicado_1.default.findOne({
            where: { id_comunicado }
        });
        res.json({ comunicado });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getOneComunicado = getOneComunicado;
async function updateComunicadoVisible(req, res) {
    try {
        const { id_comunicado } = req.params;
        const { visible } = req.body;
        const comunicado = await Comunicado_1.default.findOne({
            attributes: ['id_comunicado', 'visible'],
            where: { id_comunicado }
        });
        const updatedComunicado = await comunicado.update({
            visible
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedComunicado
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
exports.updateComunicadoVisible = updateComunicadoVisible;
