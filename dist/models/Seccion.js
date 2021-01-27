"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Seccion = sequelize.define('secciones', {
    id_seccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tema: {
        type: DataTypes.INTEGER
    },
    posicion: {
        type: DataTypes.STRING(1024)
    },
    nombre: {
        type: DataTypes.STRING(100)
    },
    frontend_id: {
        type: DataTypes.STRING(100)
    },
    visible: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
exports.default = Seccion;
