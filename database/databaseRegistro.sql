
/* CREACIÓN DE REGISTROS */

INSERT INTO noticias (titular, fecha_noticia, host_imagen, nombre_imagen, visible, create_at, update_at) VALUES
    ('UNS ES LA UNIVERSIDAD PÚBLICA CON MÁS FONDOS ADJUDICADOS POR EL MINISTERIO DE LA PRODUCCIÓN', '11/01/2021', 'www.uns.edu.pe/recursos/noticias','9014114e7b110d9d6734cb8bb98c85e6.jpg', true,'18/01/2021','18/01/2021');

INSERT INTO comunicados (host_imagen, nombre_imagen, fecha_comunicado, visible, create_at, update_at) VALUES
    ('www.uns.edu.pe/recursos/noticias' ,'9014114e7b110d9d6734cb8bb98c85e6.jpg', '04/01/2021', true,'18/01/2021','18/01/2021'));


INSERT INTO temas (descripcion, color_titulo, color_fondo, color_flecha_carrousel, 
color_btn_carrousel_relleno_activo, color_btn_carrousel_borde_activo, color_btn_carrousel_borde_inactivo) VALUES
    ('Seleccione...','#','#','#','#','#','#'),
    ('Blanco', '#E80035', '#FFFFFF','#E80035', '#E80035', '#E80035', '#767676'),
    ('Rojo', '#FFFFFF', '#E80035','#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'),
    ('Gris', '#E80035', '#F5F5F5','#E80035', '#E80035', '#E80035', '#767676');


INSERT INTO secciones (id_tema, posicion, nombre, frontend_id, visible) VALUES
    (2, 0, 'Noticias','NoticiasComponent', true),
    (3, 1, 'Comunicados','ComunicadosComponent', true),
    (2, 2, 'Logros','LogrosComponent', true),
    (4, 3, 'Vinculos','VinculosComponent', true);

