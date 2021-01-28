"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vinculos_controller_1 = require("../controllers/vinculos.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = express_1.Router();
router.route('/')
    .get(vinculos_controller_1.getVinculos)
    .post(multer_1.default.single('imagen'), vinculos_controller_1.createVinculo);
router.route('/visibles')
    .get(vinculos_controller_1.getVinculosVisibles);
router.route('/:id_vinculo')
    .get(vinculos_controller_1.getOneVinculo)
    .put(multer_1.default.single('imagen'), vinculos_controller_1.updateVinculo)
    .delete(vinculos_controller_1.deleteVinculo);
router.route('/:id_vinculo/visible')
    .put(vinculos_controller_1.updateVinculoVisible);
exports.default = router;
