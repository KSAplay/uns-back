
/* CREACIÓN DE BASE DE DATOS */

CREATE DATABASE uns_db;

/* CREACIÓN DE TABLAS */

DROP TABLE IF EXISTS noticias; 
CREATE TABLE noticias(
    id_noticia SERIAL PRIMARY KEY,
    titular VARCHAR(1024),
    url_imagen VARCHAR(1024),
    fecha_noticia DATE,
    visible BOOLEAN,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

DROP TABLE IF EXISTS temas; 
CREATE TABLE temas(
    id_tema SERIAL PRIMARY KEY,
    descripcion VARCHAR(1024),
    color_titulo CHAR(7),
    color_fondo CHAR(7),
    color_flecha_carrousel CHAR(7),
    color_btn_carrousel_relleno_activo CHAR(7),
    color_btn_carrousel_borde_activo CHAR(7),
    color_btn_carrousel_borde_inactivo CHAR(7)
);

DROP TABLE IF EXISTS secciones; 
CREATE TABLE secciones(
    id_seccion SERIAL PRIMARY KEY,
    id_tema SERIAL,
    posicion INT,
    nombre VARCHAR(100),
    frontend_id VARCHAR(100),
    visible BOOLEAN
);
