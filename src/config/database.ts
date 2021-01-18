const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
export const sequelize = new Sequelize(
    'uns_db', //db_name
    'postgres', //username
    'root', //password
    {
        host: 'localhost',
        dialect: 'postgres', 
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: true //VER MENSAJES POR CONSOLA
        
    }
    );

/*export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'uns_db',
    port: '5432'
});*/