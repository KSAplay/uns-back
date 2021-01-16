import { Router } from 'express';

// Controladores importados
import { getSecciones } from '../controllers/secciones.controller';

// Aqui se colocan las rutas
const router = Router();

// ----------------------------------------------------------
//                 RUTAS PARA LAS SECCIONES
// ----------------------------------------------------------
router.route('/')
    .get(getSecciones)

export default router;