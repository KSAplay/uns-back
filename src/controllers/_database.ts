
const { Pool } = require('pg');

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'uns_db',
    port: '5432'
});