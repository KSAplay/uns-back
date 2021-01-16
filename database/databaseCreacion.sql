
/* CREACIÓN DE BASE DE DATOS */

CREATE DATABASE uns_db;

/* CREACIÓN DE TABLAS */

CREATE TABLE secciones(
    id_noticia SERIAL PRIMARY KEY,
    titular VARCHAR(1024),
    url_imagen VARCHAR(1024),
    fecha_noticia DATE,
    visible BOOLEAN,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);