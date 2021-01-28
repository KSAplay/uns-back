"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVinculoVisible = exports.getOneVinculo = exports.deleteVinculo = exports.updateVinculo = exports.createVinculo = exports.getVinculosVisibles = exports.getVinculos = void 0;
// ----------------------------- IMPORTS --------------------------------
const Vinculo_1 = __importDefault(require("../models/Vinculo"));
const var_constant_1 = require("../shared/var.constant");
const date_1 = require("../libs/date");
// ----------------------------------------------------------------------
// -----------------------------------------------------------------------
//                            OBTENER VÍNCULOS
//                         (Para el admin-frontend)
// -----------------------------------------------------------------------
async function getVinculos(req, res) {
    try {
        const vinculos = await Vinculo_1.default.findAll({
            order: [
                ['id_vinculo', 'DESC']
            ]
        });
        res.json({
            data: vinculos
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getVinculos = getVinculos;
// -----------------------------------------------------------------------
//                       OBTENER VÍNCULOS VISIBLES
//                         (Para el uns-frontend)
// -----------------------------------------------------------------------
async function getVinculosVisibles(req, res) {
    try {
        const vinculos = await Vinculo_1.default.findAll({
            where: {
                visible: true
            },
            order: [
                ['id_vinculo', 'DESC']
            ]
        });
        res.json({
            data: vinculos
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getVinculosVisibles = getVinculosVisibles;
// -----------------------------------------------------------------------
//                            CREAR VÍNCULO
// -----------------------------------------------------------------------
async function createVinculo(req, res) {
    try {
        let newVinculo = await Vinculo_1.default.create({
            visible: true
        });
        if (req.file != undefined) {
            await newVinculo.update({
                nombre_imagen: req.file.filename,
                host_imagen: `${var_constant_1.HOST}/${req.file.destination}`
            });
        }
        res.json({
            message: 'Creado satisfactorio',
            newVinculo
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
exports.createVinculo = createVinculo;
// -----------------------------------------------------------------------
//                            ACTUALIZAR VÍNCULO
// -----------------------------------------------------------------------
async function updateVinculo(req, res) {
    try {
        const { id_vinculo } = req.params;
        const vinculo = await Vinculo_1.default.findOne({
            attributes: ['id_vinculo', 'host_imagen', 'nombre_imagen', 'update_at'],
            where: { id_vinculo }
        });
        if (req.file != undefined) {
            await vinculo.update({
                nombre_imagen: req.file.filename,
                host_imagen: `${var_constant_1.HOST}/${req.file.destination}`
            });
        }
        const updatedVinculo = await vinculo.update({
            update_at: date_1.getFechaHoraActual()
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedVinculo
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
exports.updateVinculo = updateVinculo;
// -----------------------------------------------------------------------
//                            ELIMINAR VÍNCULO
// -----------------------------------------------------------------------
async function deleteVinculo(req, res) {
    try {
        const { id_vinculo } = req.params;
        await Vinculo_1.default.destroy({
            where: {
                id_vinculo
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
exports.deleteVinculo = deleteVinculo;
// -----------------------------------------------------------------------
//                           OBTENER UN SOLO VINCULO
// -----------------------------------------------------------------------
async function getOneVinculo(req, res) {
    try {
        const { id_vinculo } = req.params;
        const vinculo = await Vinculo_1.default.findOne({
            where: { id_vinculo }
        });
        res.json({ vinculo });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getOneVinculo = getOneVinculo;
// -----------------------------------------------------------------------
//                   ACTUALIZAR VISIBILIDAD DEL VINCULO
// -----------------------------------------------------------------------
async function updateVinculoVisible(req, res) {
    try {
        const { id_vinculo } = req.params;
        const { visible } = req.body;
        const vinculo = await Vinculo_1.default.findOne({
            attributes: ['id_vinculo', 'visible'],
            where: { id_vinculo }
        });
        const updatedVinculo = await vinculo.update({
            visible
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedVinculo
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
exports.updateVinculoVisible = updateVinculoVisible;
