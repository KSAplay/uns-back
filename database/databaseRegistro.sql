
/* CREACIÓN DE REGISTROS */

INSERT INTO noticias (titular, url_imagen, visible) VALUES
    ('Titular de ejemplo', 'uploads/img.jpg', true),
    ('Titular de ejemplo 2', 'uploads/img2.jpg', false);



INSERT INTO temas (descripcion, color_titulo, color_fondo, color_flecha_carrousel, 
color_btn_carrousel_relleno_activo, color_btn_carrousel_borde_activo, color_btn_carrousel_borde_inactivo) VALUES
    ('Seleccione...','#','#','#','#','#','#'),
    ('Blanco', '#E80035', '#FFFFFF','#E80035', '#E80035', '#E80035', '#767676'),
    ('Rojo', '#FFFFFF', '#E80035','#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'),
    ('Gris', '#E80035', '#F5F5F5','#FFFFFF', '#E80035', '#E80035', '#767676');


INSERT INTO secciones (id_tema, posicion, nombre, frontend_id, visible) VALUES
    (2, 0, 'Noticias','NoticiasComponent', true),
    (3, 1, 'Comunicados','ComunicadosComponent', true),
    (2, 2, 'Logros','LogrosComponent', true),
    (4, 3, 'Vinculos','VinculosComponent', true);

