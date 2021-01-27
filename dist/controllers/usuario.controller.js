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
        console.log(email);
        console.log(password);
        const usuario = await Usuario_1.default.findOne({
            where: { email }
        });
        if (!email)
            throw `Usuario no registrado`;
        encriptar_helper_1.ComparePassword(usuario.password, password, (error, esCorrecto) => {
            if (error)
                throw "Hubo un error mientras se autenticaba, intentar más tarde";
            if (!esCorrecto)
                throw "email y/o password son inválidas";
            delete usuario.password;
            res.json(usuario);
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
        const usuario = await Usuario_1.default.findOne({ email });
        if (usuario)
            throw "Existe una cuenta registrada con este email";
        encriptar_helper_1.CodificarPassword(password, (error, password) => {
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
