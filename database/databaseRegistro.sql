
/* CREACIÓN DE REGISTROS */

INSERT INTO noticias (titular, url_imagen, visible) VALUES
    ('Titular de ejemplo', 'uploads/img.jpg', true),
    ('Titular de ejemplo 2', 'uploads/img2.jpg', false);



INSERT INTO temas (descripcion, color_titulo, color_fondo, color_flecha_carrousel, 
color_btn_carrousel_relleno_activo, color_btn_carrousel_borde_activo, color_btn_carrousel_borde_inactivo) VALUES
    ('Blanco', '#E80035', '#FFFFFF','#E80035', '#E80035', '#E80035', '#767676'),
    ('Rojo', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'),
    ('Gris', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF');


INSERT INTO secciones (id_tema, posicion, nombre, frontend_id, visible) VALUES
    (1, 0, 'Noticias','NoticiasComponent', true),
    (1, 1, 'Comunicados','ComunicadosComponent', true),
    (1, 2, 'Logros','LogrosComponent', true),
    (1, 3, 'Vinculos','VinculosComponent', true);

