"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noticias_controller_1 = require("../controllers/noticias.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = express_1.Router();
router.route('/')
    .get(noticias_controller_1.getNoticias)
    .post(multer_1.default.single('imagen'), noticias_controller_1.createNoticia);
router.route('/visibles')
    .get(noticias_controller_1.getNoticiasVisibles);
router.route('/:id_noticia')
    .get(noticias_controller_1.getOneNoticia)
    .put(multer_1.default.single('imagen'), noticias_controller_1.updateNoticia)
    .delete(noticias_controller_1.deleteNoticia);
router.route('/:id_noticia/visible')
    .put(noticias_controller_1.updateNoticiaVisible);
exports.default = router;
