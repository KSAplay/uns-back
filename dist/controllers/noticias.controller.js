"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoticiaVisible = exports.getOneNoticia = exports.deleteNoticia = exports.updateNoticia = exports.createNoticia = exports.getNoticiasVisibles = exports.getNoticias = void 0;
const Noticia_1 = __importDefault(require("../models/Noticia"));
const var_constant_1 = require("../shared/var.constant");
const date_1 = require("../libs/date");
async function getNoticias(req, res) {
    try {
        const noticias = await Noticia_1.default.findAll({
            order: [
                ['fecha_noticia', 'DESC']
            ]
        });
        res.json({
            data: noticias
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getNoticias = getNoticias;
async function getNoticiasVisibles(req, res) {
    try {
        const noticias = await Noticia_1.default.findAll({
            where: {
                visible: true
            },
            order: [
                ['fecha_noticia', 'DESC']
            ]
        });
        res.json({
            data: noticias
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getNoticiasVisibles = getNoticiasVisibles;
async function createNoticia(req, res) {
    try {
        const { titular, fecha_noticia } = req.body;
        let newNoticia = await Noticia_1.default.create({
            titular, fecha_noticia, visible: true
        });
        if (req.file != undefined) {
            await newNoticia.update({
                nombre_imagen: req.file.filename,
                host_imagen: `${var_constant_1.HOST}/${req.file.destination}`
            });
        }
        res.json({
            message: 'Creado satisfactorio',
            newNoticia
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
exports.createNoticia = createNoticia;
async function updateNoticia(req, res) {
    try {
        const { id_noticia } = req.params;
        const { titular, fecha_noticia } = req.body;
        //console.log('Body JSON- ' + JSON.stringify(req.body) );
        const noticia = await Noticia_1.default.findOne({
            attributes: ['id_noticia', 'titular', 'fecha_noticia', 'host_imagen', 'nombre_imagen', 'update_at'
            ],
            where: { id_noticia }
        });
        if (req.file != undefined) {
            await noticia.update({
                nombre_imagen: req.file.filename,
                host_imagen: `${var_constant_1.HOST}/${req.file.destination}`
            });
        }
        const updatedNoticia = await noticia.update({
            titular, fecha_noticia, update_at: date_1.getFechaHoraActual()
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedNoticia
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
exports.updateNoticia = updateNoticia;
async function deleteNoticia(req, res) {
    try {
        const { id_noticia } = req.params;
        await Noticia_1.default.destroy({
            where: {
                id_noticia
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
exports.deleteNoticia = deleteNoticia;
async function getOneNoticia(req, res) {
    try {
        const { id_noticia } = req.params;
        const noticia = await Noticia_1.default.findOne({
            where: { id_noticia }
        });
        res.json({ noticia });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getOneNoticia = getOneNoticia;
async function updateNoticiaVisible(req, res) {
    try {
        const { id_noticia } = req.params;
        const { visible } = req.body;
        const noticia = await Noticia_1.default.findOne({
            attributes: ['id_noticia', 'visible'],
            where: { id_noticia }
        });
        const updatedNoticia = await noticia.update({
            visible
        });
        res.json({
            message: 'Actualizado satisfactorio',
            updatedNoticia
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
exports.updateNoticiaVisible = updateNoticiaVisible;
