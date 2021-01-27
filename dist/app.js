"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express_1.default();
const noticias_route_1 = __importDefault(require("./routes/noticias.route"));
const secciones_route_1 = __importDefault(require("./routes/secciones.route"));
const temas_route_1 = __importDefault(require("./routes/temas.route"));
const comunicados_route_1 = __importDefault(require("./routes/comunicados.route"));
const vinculos_route_1 = __importDefault(require("./routes/vinculos.route"));
const menus_route_1 = __importDefault(require("./routes/menus.route"));
const usuarios_route_1 = __importDefault(require("./routes/usuarios.route"));
// Configuración
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(morgan_1.default('dev')); // Sirve para identificar las rutas, incluso si hay un error
app.use(cors());
app.use(express_1.default.json());
//app.use(bodyParser.urlencoded({ extended: true })); 
//app.use(express.urlencoded({ extended: true }))
// routes
app.use('/api/noticias', noticias_route_1.default);
app.use('/api/secciones', secciones_route_1.default);
app.use('/api/temas', temas_route_1.default);
app.use('/api/comunicados', comunicados_route_1.default);
app.use('/api/vinculos', vinculos_route_1.default);
app.use('/api/menus', menus_route_1.default);
app.use('/api/', usuarios_route_1.default);
// Este folder será usado para almacenar archivos publicos
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
