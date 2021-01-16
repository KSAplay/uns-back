import express from 'express';
import morgan from 'morgan';
import path from 'path';
var cors = require('cors');

const app = express();

import indexRoutes from './routes/index';

// Configuración
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev')); // Sirve para identificar las rutas, incluso si hay un error
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded());

// routes
app.use('/api', indexRoutes);

// Este folder será usado para almacenar archivos publicos
app.use('./uploads', express.static(path.resolve('uploads')));


export default app;