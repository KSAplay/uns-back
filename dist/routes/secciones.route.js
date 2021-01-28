"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const secciones_controller_1 = require("../controllers/secciones.controller");
const router = express_1.Router();
router.route('/')
    .get(secciones_controller_1.getSecciones);
router.route('/orden')
    .get(secciones_controller_1.getSeccionesOrden);
router.route('/visible')
    .put(secciones_controller_1.updateSeccionVisible);
router.route('/tema')
    .put(secciones_controller_1.updateSeccionTema);
router.route('/posicion')
    .put(secciones_controller_1.updateSeccionPosicion);
exports.default = router;
