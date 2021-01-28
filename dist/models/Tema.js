"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seccion_1 = __importDefault(require("./Seccion"));
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Tema = sequelize.define('temas', {
    id_tema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(1024)
    },
    color_titulo: {
        type: DataTypes.STRING(7)
    },
    color_fondo: {
        type: DataTypes.STRING(7)
    },
    color_flecha_carrousel: {
        type: DataTypes.STRING(7)
    },
    color_btn_carrousel_relleno_activo: {
        type: DataTypes.STRING(7)
    },
    color_btn_carrousel_borde_activo: {
        type: DataTypes.STRING(7)
    },
    color_btn_carrousel_borde_inactivo: {
        type: DataTypes.STRING(7)
    }
}, {
    timestamps: false
});
Tema.hasMany(Seccion_1.default, { foreignKey: 'id_tema', sourceKey: 'id_tema' });
Seccion_1.default.belongsTo(Tema, { foreignKey: 'id_tema', sourceKey: 'id_tema' });
exports.default = Tema;
