"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Comunicado = sequelize.define('comunicados', {
    id_comunicado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_imagen: {
        type: DataTypes.STRING(1024)
    },
    host_imagen: {
        type: DataTypes.STRING(1024)
    },
    fecha_comunicado: {
        type: DataTypes.DATEONLY
    },
    visible: {
        type: DataTypes.BOOLEAN
    },
    create_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    update_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false
});
exports.default = Comunicado;
