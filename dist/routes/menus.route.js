"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menus_controller_1 = require("../controllers/menus.controller");
const router = express_1.Router();
router.route('/:id_menu')
    .delete(menus_controller_1.deleteMenu);
router.route('/parent/:id_parent')
    .get(menus_controller_1.getMenuOfParent);
router.route('/:id_menu/visible')
    .put(menus_controller_1.updateMenuVisible);
router.route('/:id_menu/nombre')
    .put(menus_controller_1.updateMenuNombre);
router.route('/:id_menu/posicion')
    .put(menus_controller_1.updateMenuPosicion);
exports.default = router;
