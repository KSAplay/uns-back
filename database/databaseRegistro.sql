
/* CREACIÓN DE REGISTROS */

INSERT INTO temas (descripcion, color_titulo, color_fondo, color_flecha_carrousel, 
color_btn_carrousel_relleno_activo, color_btn_carrousel_borde_activo, color_btn_carrousel_borde_inactivo) VALUES
    ('Seleccione...','#','#','#','#','#','#'),
    ('Blanco', '#E80035', '#FFFFFF','#E80035', '#E80035', '#E80035', '#767676'),
    ('Rojo', '#FFFFFF', '#E80035','#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'),
    ('Gris', '#E80035', '#F5F5F5','#E80035', '#E80035', '#E80035', '#767676');


INSERT INTO noticias (titular, fecha_noticia, host_imagen, nombre_imagen, visible, create_at, update_at) VALUES
    ('UNS es la universidad pública con más fondos adjudicados por el ministerio de la producción.', '11/01/2021', 'http://www.uns.edu.pe/recursos/noticias','9014114e7b110d9d6734cb8bb98c85e6.jpg', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Docente de la uns gana concurso nacional de investigación de CONCYTEC.', '16/12/2020', 'http://www.uns.edu.pe/recursos/noticias','0af5760983644ca3c56b519d6f912e80.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('UNS y CAREC suscriben convenio que beneficiará a estudiantes y docentes de Energía y Mecánica.', '16/12/2020', 'http://www.uns.edu.pe/recursos/noticias','e7a26a346d1800fdbcbfbc50bf5824cc.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Egresado de la uns realizó pasantía en Argentina.', '14/12/2020', 'http://www.uns.edu.pe/recursos/noticias','d1b200a64a4ad6cdd96fc0aed91a9cea.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('UNS renueva edificio de la escuela de Posgrado.', '11/12/2020', 'http://www.uns.edu.pe/recursos/noticias','30103beac474713c2a51bffa520c63ce.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('UNS inaugura imponente Complejo Deportivo.', '08/12/2020', 'http://www.uns.edu.pe/recursos/noticias','4c21810ae76c39163d57f163a468eeb0.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Egresados y estudiantes de Derecho de la UNS organizan primer modelo de Naciones Unidas en Áncash.', '12/11/2020', 'http://www.uns.edu.pe/recursos/noticias','7f3f79e0f9fa0cd1d8a216380ba56874.png', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Reconocen a joven por ocupar primer puesto en cómputo general en Exámen de Admisión Ordinario.', '12/11/2020', 'http://www.uns.edu.pe/recursos/noticias','def13348b91a21ae202cc369416af4be.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Trabajadores de la UNS reciben kit de bioseguridad al retornar a sus labores.', '05/10/2020', 'http://www.uns.edu.pe/recursos/noticias','6db5b68cffa9925c8648ac3fcc9479de.49.00%20PM.jpeg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('UNS apoya aprobación de ley para creación e implementación del Parque Científico Tecnológico.', '01/10/2020', 'http://www.uns.edu.pe/recursos/noticias','36fa0b2055977de706a9e1f4d0b0c211.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Personal administrativo de la UNS es capacitado en el marco de la ejecución del plan COVID-19.', '28/09/2020', 'http://www.uns.edu.pe/recursos/noticias','2062e9763cd94fff142fffda5d7fc8a5.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Santeña entre los 100 jóvenes líderes en biotecnología de latinoamérica.', '25/09/2020', 'http://www.uns.edu.pe/recursos/noticias','7891160bb7b9448f510fa8a00495b69c.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Maestristas y doctorandos iniciaron clases virtuales en la UNS.', '19/09/2020', 'http://www.uns.edu.pe/recursos/noticias','6a577b8081e33d8b3b25fb521bfc8694.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Primera sustentación virtual de informe final de tesis en la UNS.', '31/07/2020', 'http://www.uns.edu.pe/recursos/noticias','da84e842a81111c0bc9910a8f5080f1a.png', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Rector reconoció labor de docentes de la UNS, quienes ante la emergencia sanitaria se adaptaron.', '10/07/2020', 'http://www.uns.edu.pe/recursos/noticias','7a5939a7d9035970470ec4c6d9c05d16.01.15%20PM%20(2).jpeg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('UNS entregó dispositivos de internet móvil a sus estudiantes de bajos recursos económicos.', '17/06/2020', 'http://www.uns.edu.pe/recursos/noticias','033fc6553810938d7215a7c28106d18c.jpeg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ministro de Educación felicita a la UNS por ofrecer servicio educativo no presencial.', '01/06/2020', 'http://www.uns.edu.pe/recursos/noticias','9014114e7b110d9d6734cb8bb98c85e6.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Enfermero egresado de la UNS integra brigada de ayuda a loretanos.', '23/05/2020', 'http://www.uns.edu.pe/recursos/noticias','33ce8cd3e3a0f1033c78c2153a1953a5.jpg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('UNS prestará equipo de biología molecular al MINSA para pruebas de COVID-19.', '30/04/2020', 'http://www.uns.edu.pe/recursos/noticias','7f203cc535beda85efacc6a3c29335b9.jpeg', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


INSERT INTO comunicados (host_imagen, nombre_imagen, fecha_comunicado, visible, create_at, update_at) VALUES
    ('http://www.uns.edu.pe/recursos/eventos' ,'b555dea8aefcfa4a18d2098f981f3c1b.jpg', '04/01/2021', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'911a355a3d718231955e5c9e7e918ae5.png', '10/01/2021', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'7229e1c5892f735f668831d902594125.png', '28/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'072dd077a7f700f61807831c8d2a0c1b.png', '14/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'415e79a5f2484cd800129c4d720bdb86.png', '11/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'502cea0d4fec99854f4b9cc37f3d9717.png', '09/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'94ad4c185a86898f8cd07f0152a7c410.png', '08/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'2f66fa864123f3fcb62ab25cb2f13b4e.png', '07/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'aa4cd8e3c4539030277a396a83955f77.png', '03/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'3fd3520e5cef4bd078a8609b48bf21bc.png', '02/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'4a1578343bacbbb441297597fe942894.png', '02/12/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'043a4ecd592f93e2c43a5a8e792efff4.png', '26/11/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'08eb9eb70b100f190a568a94d5b06c07.png', '26/11/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'5bf7cfa8c82d4f75290b2a5b9ec0ad2f.jpg', '25/11/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'38ea071abf5923f499ebd600ad12886f.png', '24/11/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('http://www.uns.edu.pe/recursos/eventos' ,'b86470463cb553fa656ecf3e04b4bb06.png', '23/11/2020', true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


INSERT INTO secciones (id_tema, posicion, nombre, frontend_id, visible) VALUES
    (2, 0, 'Noticias','NoticiasComponent', true),
    (3, 1, 'Comunicados','ComunicadosComponent', true),
    (2, 2, 'Logros','LogrosComponent', true),
    (4, 3, 'Vinculos','VinculosComponent', true);


INSERT INTO vinculos (host_imagen, nombre_imagen, visible, create_at, update_at) VALUES
    ('http://localhost:4000/uploads/vinculos' ,'beca-presidente.png', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('http://localhost:4000/uploads/vinculos' ,'iop.png', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('http://localhost:4000/uploads/vinculos' ,'pronabec.png', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('http://localhost:4000/uploads/vinculos' ,'science-direct.png', true,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('http://localhost:4000/uploads/vinculos' ,'sunedu.png', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('http://localhost:4000/uploads/vinculos' ,'uniBernardo.png', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO menus ( nombre, id_parent, orden, ruta, visible,create_at,update_at) VALUES  
('Admision',null, 1,null,true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Facultades',null, 2,null,true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Posgrado',null, 3,null,true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Direcciones',null, 4,null,true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
('C.De.Producion',null, 5,null,true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('Vinculos',null, 6,null,true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);  

INSERT INTO menus ( nombre, id_parent, orden, ruta, visible,create_at,update_at) VALUES  
    ('Proceso de admision',1, 1,'admision/proceso-de-admision',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    
    ('Ingenieria',2, 1,'ingenieria/facultad-de-ingenieria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ciencias',2, 2,'ciencias/facultad-de-ciencias',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Educacion',2, 3,'humanidades/facultad-de-educacion-y-humanidades',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Maestrias',3, 1,'maestrias/maestrias',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Doctorados',3, 2,'doctorados/doctorados',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Administracion',4, 1,'administracion/administracion',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Instalaciones',5, 1,'instalaciones/instalaciones',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Enlaces',6, 1,'enlaces/enlaces',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO menus ( nombre, id_parent, orden, ruta, visible,create_at,update_at) VALUES  
    ('Proceso de Inscripcion',7, 1,'admision/proceso-de-admision',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Cronograma',7, 2,'admision/cronograma',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Derecho de Inscripcion',7, 3,'admision/derecho-de-inscripcion',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Inscripcion Online',7, 4,'admision/inscripcion-Online',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Tabla de Conversiones',7, 5,'tabla-de-conversiones',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Reglamento',7, 6,'admision/reglamento',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Temario',7, 7,'admision/temario',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Consejos',7, 8,'admision/consejos',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Preguntas Frecuentes',7, 9,'admision/preguntas-frecuentes',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),  

    ('Ingenieria de Sistemas e Informatica',8, 1,'ingenieria/ingenieria-de-sistemas-e-informatica',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP), 
    ('Ingenieria Civil',8, 2,'ingenieria/ingenieria-civil',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ingenieria Agroindustrial',8, 3,'ingenieria/ingenieria-agroindustrial',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ingenieria en Energia',8, 4,'ingenieria/Ingenieria-en-energia',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ingenieria Agronoma',8, 5,'ingenieria/ingenieria-agronoma',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ingenieria Mecanica',8, 6,'ingenieria/ingenieria-mecanica',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),

    ('Biologia en Acuicultura',9, 1,'ciencias/biologia-en-acuicultura',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Enfemeria',9, 2,'ciencias/enfemeria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Biotecnologia',9, 3,'ciencias/biotecnologia',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Medicina Humana',9, 4,'ciencias/medicina-Humana',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),

    ('Educacion Inicial',10, 1,'humanidades/educacion-inicial',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Educacion Primaria',10, 2,'humanidades/educacion-primaria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Comunicacion Social',10, 3,'humanidades/comunicacion-social',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Derecho y Ciencias politicas',10, 4,'humanidades/derecho-y-ciencias-politicas',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Educacion Secundaria',10, 5,'humanidades/educacion-secundaria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),

    ('Derecho Constitucional',11, 1,'maestrias/derecho-constitucional',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Derecho Penal',11, 2,'maestrias/derecho-penal',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ciencias de Enfemeria',11, 3,'maestrias/ciencias-de-enfemeria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ciencias de la Educacion',11, 4,'maestrias/ciencias-de-la-educacion',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ciencias Energeticas',11, 5,'maestrias/ciencias-energeticas',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Gerencia de industrias Agropecuarias',11, 6,'maestrias/gerencia-de-industrias-agropecuarias',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Gestion Ambiental',11, 7,'maestrias/gestion-ambiental',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Ingenieria Sistemas e Informatica',11, 8,'maestrias/ingenieria-sistemas-e-informatica',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),

    ('Concepcion del Doctorado',12, 1,'doctorados/concepcion-del-doctorado',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Perfil del Doctor',12, 2,'doctorados/perfil-del-doctor',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Matricula',12, 3,'doctorados/matricula',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Inversion',12, 4,'doctorados/inversion',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Informes e Inscripciones',12, 5,'doctorados/informes-e-inscripciones',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),

    ('Rectorado',13, 1,'administracion/rectorado',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Vicerrectorado Academico',13, 2,'administracion/vicerrectorado-academico',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Vicerrectorado de Investigacion',13, 3,'administracion/vicerrectorado-de-investigacion',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Direccion General de Administracion',13, 4,'administracion/direccion-general-de-administracion',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    
    ('Centro Preuniversitario CEPUNS',14, 1,'instalaciones/centro-preuniversitario-cepuns',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Centro de Idiomas CEIDUNS',14, 2,'instalaciones/centro-de-idiomas-ceiduns',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Centro de Computo CECOMP',14, 3,'instalaciones/centro-de-computo-cecomp',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Institucion Educativa Experimental',14, 4,'instalaciones/institucion-educativa-experimental',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Planta Piloto Agroindustrial',14, 5,'instalaciones/planta-piloto-agroindustrial',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),

    ('Universidad',15, 1,'enlaces/universidad',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Directorio',15, 2,'enlaces/directorio',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Intranet',15, 3,'enlaces/intranet',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Defensoria Universitaria',15, 4,'enlaces/defensoria-universitaria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Licenciamiento',15, 5,'enlaces/licenciamiento',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Campus virtual',15, 6,'enlaces/campus-virtual',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Correo UNS',15, 7,'enlaces/correo-uns',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Transparencia Estandar',15, 8,'enlaces/transparencia-estandar',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    ('Transparencia Universitaria',15,9,'enlaces/transparencia-universitaria',true,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
