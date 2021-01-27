"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comunicados_controller_1 = require("../controllers/comunicados.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = express_1.Router();
router.route('/')
    .get(comunicados_controller_1.getComunicados)
    .post(multer_1.default.single('imagen'), comunicados_controller_1.createComunicado);
router.route('/visibles')
    .get(comunicados_controller_1.getComunicadosVisibles);
router.route('/:id_comunicado')
    .get(comunicados_controller_1.getOneComunicado)
    .put(multer_1.default.single('imagen'), comunicados_controller_1.updateComunicado)
    .delete(comunicados_controller_1.deleteComunicado);
router.route('/:id_comunicado/visible')
    .put(comunicados_controller_1.updateComunicadoVisible);
exports.default = router;
