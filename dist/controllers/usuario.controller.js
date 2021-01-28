"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarUsuario = exports.iniciarSession = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
const encriptar_helper_1 = require("../Helpers/encriptar.helper");
async function iniciarSession(req, res, next) {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario_1.default.findOne({
            attributes: ['email', 'password'],
            where: { email }
        });
        if (usuario === null)
            throw { message: `Usuario no registrado` };
        console.log(typeof (usuario.dataValues.password));
        console.log(password);
        encriptar_helper_1.ComparePassword(usuario.dataValues.password, password, (error, esCorrecto) => {
            console.log(error);
            console.log(esCorrecto);
            if (error)
                throw { message: "Hubo un error mientras se autenticaba, intentar más tarde" };
            if (!esCorrecto)
                throw { message: "email y/o password son inválidas" };
            delete usuario.dataValues.password;
            res.json(usuario.dataValues);
        });
    }
    catch (e) {
        res.status(500).send(e);
    }
}
exports.iniciarSession = iniciarSession;
async function registrarUsuario(req, res, next) {
    try {
        const { nombres, apellidos, email, password } = req.body;
        const usuario = await Usuario_1.default.findOne({ where: { email } });
        if (usuario)
            throw "Existe una cuenta registrada con este email";
        encriptar_helper_1.CodificarPassword(password, async (error, password) => {
            if (error)
                throw "Hubo un error mientras se registraba, intentar mas tarde";
            let nuevoUsuario = Usuario_1.default.create({
                nombres, apellidos, email, password
            });
            delete nuevoUsuario.password;
            res.json(nuevoUsuario);
        });
    }
    catch (e) {
        res.status(500).send(e);
    }
}
exports.registrarUsuario = registrarUsuario;
