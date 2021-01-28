"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemaBySeccionFrontendID = exports.getTemas = void 0;
const Tema_1 = __importDefault(require("../models/Tema"));
const Seccion_1 = __importDefault(require("../models/Seccion"));
async function getTemas(req, res) {
    try {
        const temas = await Tema_1.default.findAll();
        res.json({
            data: temas
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getTemas = getTemas;
async function getTemaBySeccionFrontendID(req, res) {
    try {
        const { frontend_id } = req.params;
        const seccion = await Seccion_1.default.findOne({
            attributes: ['id_tema'],
            where: { frontend_id }
        });
        const tema = await Tema_1.default.findOne({
            attributes: { exclude: ['id_tema'] },
            where: { id_tema: seccion.id_tema }
        });
        res.json({
            data: tema
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getTemaBySeccionFrontendID = getTemaBySeccionFrontendID;
