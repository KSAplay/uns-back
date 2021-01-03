
/* CREACIÓN DE BASE DE DATOS */
CREATE DATABASE uns_db;

/* CREACIÓN DE TABLAS */

CREATE TABLE noticias(
    id_noticia SERIAL PRIMARY KEY,
    titular VARCHAR(1024),
    url_imagen VARCHAR(1024),
    fecha_noticia DATE,
    visible SMALLINT,t
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

/* CREACIÓN DE REGISTROS */
INSERT INTO noticias (titular, url_imagen, visible) VALUES
    ('Titular de ejemplo', 'uploads/img.jpg',1),
    ('Titular de ejemplo 2', 'uploads/img2.jpg',0);