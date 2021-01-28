const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
export const sequelize = new Sequelize(
    'uns_db', //db_name
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
        
    }
    );