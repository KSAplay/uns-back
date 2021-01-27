"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temas_controller_1 = require("../controllers/temas.controller");
const router = express_1.Router();
router.route('/')
    .get(temas_controller_1.getTemas);
router.route('/seccion/frontendid/:frontend_id')
    .get(temas_controller_1.getTemaBySeccionFrontendID);
exports.default = router;
