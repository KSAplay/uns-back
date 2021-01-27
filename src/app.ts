import express from 'express';
import morgan from 'morgan';
import path from 'path';
var bodyParser = require('body-parser');

var cors = require('cors');

const app = express();

import noticiasRoutes from './routes/noticias.route';
import seccionesRoutes from './routes/secciones.route';
import temasRoutes from './routes/temas.route';
import comunicadosRoutes from './routes/comunicados.route';
import vinculosRoutes from './routes/vinculos.route';
import menusRoutes from './routes/menus.route';
import usuarioRoutes from './routes/usuarios.route';

// Configuración
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev')); // Sirve para identificar las rutas, incluso si hay un error
app.use(cors());
app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/noticias', noticiasRoutes);
app.use('/api/secciones', seccionesRoutes);
app.use('/api/temas', temasRoutes);
app.use('/api/comunicados', comunicadosRoutes);
app.use('/api/vinculos', vinculosRoutes);
app.use('/api/menus', menusRoutes);
app.use('/api/', usuarioRoutes);

// Este folder será usado para almacenar archivos publicos
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;