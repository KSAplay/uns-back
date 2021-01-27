"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = express_1.Router();
router.route('/iniciarSession')
    .post(usuario_controller_1.iniciarSession);
router.route('/registrarUsuario')
    .post(usuario_controller_1.registrarUsuario);
exports.default = router;
