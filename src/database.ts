
const { Pool } = require('pg');

export async function startConnection() {
    await new Pool({
        host: 'localhost',
        user: 'ShadowRoot',
        password: '',
        database: 'uns-db',
        port: '5432'
    });
    console.log('Base de Datos conectada.')
}