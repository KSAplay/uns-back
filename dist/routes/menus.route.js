"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menus_controller_1 = require("../controllers/menus.controller");
const router = express_1.Router();
router.route('/parent/:id_parent')
    .get(menus_controller_1.getMenuOfParent);
router.route('/:id_menu/visible')
    .put(menus_controller_1.updateMenuVisible);
exports.default = router;
