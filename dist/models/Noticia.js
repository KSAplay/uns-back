"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Noticia = sequelize.define('noticias', {
    id_noticia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    titular: {
        type: DataTypes.STRING(1024)
    },
    nombre_imagen: {
        type: DataTypes.STRING(1024)
    },
    host_imagen: {
        type: DataTypes.STRING(1024)
    },
    fecha_noticia: {
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
exports.default = Noticia;
