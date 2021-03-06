
/* CREACIÓN DE BASE DE DATOS */

DROP DATABASE IF EXISTS uns_db;
CREATE DATABASE uns_db;

/* CREACIÓN DE TABLAS */ 
 
DROP TABLE IF EXISTS noticias; 
CREATE TABLE noticias(
    id_noticia SERIAL PRIMARY KEY,
    titular VARCHAR(1024),
    fecha_noticia DATE,
    visible BOOLEAN,
    nombre_imagen VARCHAR(1024),
    host_imagen VARCHAR(1024),
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

DROP TABLE IF EXISTS comunicados; 
CREATE TABLE comunicados(
    id_comunicado SERIAL PRIMARY KEY,
    nombre_imagen VARCHAR(1024),
    host_imagen VARCHAR(1024),
    fecha_comunicado DATE,
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
    visible BOOLEAN,
    CONSTRAINT fk_tema
      FOREIGN KEY(id_tema) 
	  REFERENCES temas(id_tema)
      ON DELETE CASCADE
);

DROP TABLE IF EXISTS vinculos; 
CREATE TABLE vinculos(
    id_vinculo SERIAL PRIMARY KEY,
    nombre_imagen VARCHAR(1024),
    host_imagen VARCHAR(1024),
    visible BOOLEAN,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

DROP TABLE IF EXISTS menus; 
CREATE TABLE menus(
    id_menu SERIAL PRIMARY KEY,
    id_parent INT NULL REFERENCES menus(id_menu),
    nombre VARCHAR(250),
    orden INT,
    ruta VARCHAR(1024),
    visible BOOLEAN,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

DROP TABLE IF EXISTS usuarios; 
CREATE TABLE usuarios(
    id_usuario SERIAL PRIMARY KEY,
    nombres VARCHAR(1024),
    apellidos VARCHAR(1024),
    email VARCHAR(1024),
    password VARCHAR(1024),
    visible BOOLEAN,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

DROP TABLE IF EXISTS sliders; 
CREATE TABLE sliders(
    id_slider SERIAL PRIMARY KEY,
    nombre_imagen VARCHAR(1024),
    host_imagen VARCHAR(1024),
    visible BOOLEAN,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);