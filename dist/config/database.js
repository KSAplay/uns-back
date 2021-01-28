"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
// Option 1: Passing a connection URI
exports.sequelize = new Sequelize('uns_db', //db_name
'postgres', //username
'charcape', //password
{
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    logging: false //VER MENSAJES POR CONSOLA
});
